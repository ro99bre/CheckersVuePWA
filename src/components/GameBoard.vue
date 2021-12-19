<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <table class="GameBoard">
                    <tr v-for="row in rows" :key="row">
                        <td v-for="col in cols" :key="col">
                            <img v-bind:src="getTile(row-1,col-1)" class="field" v-on:click="moveTile(row-1, col-1)" v-bind:id="'field-' + row + '-' + col"/>
                            <!--<img src="../assets/game/black.jpg" class="field" v-on:click="test()" v-bind:id="'field-' + row + '-' + col"/>-->
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
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
        return {
            gameBoard: new GameBoard(),
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
                    url: 'http://localhost:8080/api/move/sx=' + this.scol + '/sy=' + this.srow + '/dx=' + col + '/dy=' + row,
                    method: "get",
                };

                console.log(options.url)
                this.getRequest(options);

                this.srow = -1;
                this.scol = -1;
            }
        },

        getRequest: async function (options) {
            let result = await axios(options).then(response => response.data);
            //console.log(result);
            this.updateGameBoard(result);
        },

        updateGameBoard (jsonData) {
            //console.log(jsonData);
            this.gameBoard = new GameBoard();
            this.gameBoard.fill(jsonData);
            //console.log(this.gameBoard)
        },

//        connectWebSocket() {
//            var websocket = new WebSocket("ws://localhost:9000/websocket");
//            websocket.setTimeout;
//
//            websocket.onopen = function () {
//                console.log("Connected to Websocket");
//            }
//
//            websocket.onclose = function () {
//                console.log('Connection with Websocket Closed!');
//            };
//
//            websocket.onerror = function (error) {
//                console.log('Error in Websocket Occured: ' + error);
//            };
//
//            websocket.onmessage = function (e) {
//                if (typeof e.data === "string") {
//                    let json = JSON.parse(e.data);
//
//                    this.updateGameBoard(json);
//                    console.log(this.gameBoard)
//                    this.Parent.gameBoard = new GameBoard();
//                    this.Parent.gameBoard.fill(json)
//                    console.log(this.gameBoard)
//                }
//            };
//        }
    },

    created() {
        //this.connectWebSocket();

        let options = {
            headers: { "Content-Type": "application/json" },
            url: "http://localhost:8080/api/jsonGame",
            method: "get",
        };

        this.getRequest(options);
    }
}

</script>

<style scoped>
  .field{
    float: left;
    width: 100%;
    height: 100%;
  }
  .GameBoard{
    width: 100%;
    max-width: 960px;
  }
  .btn-toolbar{
    margin: 15px;
    margin-left: 0px;
  }
</style>
