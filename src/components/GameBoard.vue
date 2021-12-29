<template>
    <table class="GameBoard">
        <tr v-for="row in rows" :key="row">
            <td v-for="col in cols" :key="col">
                <img v-bind:src="getTile(row-1,col-1)" class="field" v-on:click="moveTile(row-1, col-1)" v-bind:id="'field-' + row + '-' + col"/>
                <!--<img src="../assets/game/black.jpg" class="field" v-on:click="test()" v-bind:id="'field-' + row + '-' + col"/>-->
            </td>
        </tr>
    </table>
</template>

<script>
import axios from "axios";

class GameBoard {
    constructor() {
        //console.log(jsonData);

        //Create Datastructure
        this.game = [];
        for (var i = 0; i < 8; i++) {
            this.game[i] = [];
            for (var j = 0; j < 8; j++) {
                this.game[i][j] = Array(3);
            }
        }
    }
    fill(jsonData) {
        //Fill Datastructure
        let cells = jsonData.game.board.cells;
        for (let jsonEntry = 0; jsonEntry < cells.length; jsonEntry++) {
            //Set Tile Color
            this.game[cells[jsonEntry].y][cells[jsonEntry].x][0] = cells[jsonEntry].color;

            //Check if Piece is located on Tile and it is not kicked
            if (cells[jsonEntry].piece.piececolor !== "None" && cells[jsonEntry].piece.kicked !== "isKicked") {
                this.game[cells[jsonEntry].y][cells[jsonEntry].x][1] = cells[jsonEntry].piece.piececolor;

                //Check if Piece is a Queen
                if (cells[jsonEntry].piece.queen === "isQueen") {
                    this.game[cells[jsonEntry].y][cells[jsonEntry].x][2] = true;
                }
            }
        }
        //console.log(this.game)
    }
}

export default {
    name: 'GameBoard',
    data: function () {
        var path = '/websocket'
        //var WebsocketUrl = "ws://localhost:9000" + path
        var WebsocketUrl = "wss://webapplications-group06-ws2122.herokuapp.com" + path
        return {
            gameBoard: new GameBoard(),
            websocket: new WebSocket(WebsocketUrl),
            rows: 8,
            cols: 8,
            scol: -1,
            srow: -1
        }
    },

    methods: {
        getTile(row, col) {
            //var path = '../assets/game/'
            var path = 'http://localhost:9000/assets/images/game/'
            //Non Empty Cell
            if (this.gameBoard.game[row][col][1] !== undefined) {
                //Queen Piece
                if (this.gameBoard.game[row][col][2] === true) {
                    return path + this.gameBoard.game[row][col][0] + this.gameBoard.game[row][col][1] + 'queen' + '.jpg';
                    //Normal Piece
                } else {
                    return path + this.gameBoard.game[row][col][0] + this.gameBoard.game[row][col][1] + '.jpg';
                }
                //Empty Cell
            } else {
                return path + this.gameBoard.game[row][col][0] + '.jpg';
            }
        },

        moveTile(row, col) {
            if (this.scol === -1 && this.srow === -1) {
                this.srow = row;
                this.scol = col;
            } else {
                let options = {
                    headers: { "Content-Type": "application/json" },
                    url: 'http://localhost:9000/move/sx=' + this.scol + '/sy=' + this.srow + '/dx=' + col + '/dy=' + row,
                    method: "get",
                };

                console.log(options.url)
                this.getRequest(options);

                this.srow = -1;
                this.scol = -1;
            }
        },

//        getRequest: async function (options) {
//            let result = await axios(options).then(response => response.data);
//            console.log(result);
//            //this.updateGameBoard(result);
//        },

        getRequest: function (options) {
            axios(options).then(response => response.data);
        },

        updateGameBoard (jsonData) {
            //console.log(jsonData);
            this.gameBoard = new GameBoard();
            this.gameBoard.fill(jsonData);
            //console.log(this.gameBoard)
        },

        initGame: async function () {
            let options = {
                headers: { "Content-Type": "application/json" },
                url: "http://localhost:9000/jsonGame",
                method: "get",
            };

            let result = await axios(options).then(response => response.data);
            this.gameBoard = new GameBoard();
            this.gameBoard.fill(result);
        },

        connectWebSocket() {
            this.websocket.setTimeout;

            this.websocket.onopen = () => {
                console.log("Connected to Websocket");
            }

            this.websocket.onclose = () => {
                console.log('Connection with Websocket Closed!');
            };

            this.websocket.onerror = (error) => {
                console.log('Error in Websocket Occured: ' + error);
            };

            this.websocket.onmessage = (e) => {
                if (typeof e.data === "string") {
                    let json = JSON.parse(e.data);

                    this.updateGameBoard(json);
                }
            };
        }
    },

    created() {
        //Initial loading of Game
        this.initGame();
        //Connecting to WebSocket
        this.connectWebSocket();
    }
}

</script>
