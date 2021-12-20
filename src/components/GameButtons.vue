<template>
    <div class="btn-toolbar" role="toolbar">
      <div class="d-grid gap-2 d-md-block col-12 mx-auto" role="group">
        <button v-on:click="undo()" type="button" class="btn btn-danger" id="undo-button">Undo</button>
        <button v-on:click="redo()" type="button" class="btn btn-secondary" id="redo-button">Redo</button>
        <button v-on:click="newGame()" type="button" class="btn btn-success" id="redo-button">New Game</button>
        <!--<button type="button" class="btn btn-info" data-toggle="modal" data-target="#loadModal">Load</button>-->
        <!--<button type="button" class="btn btn-success" data-toggle="modal" data-target="#saveModal">Save</button>-->
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'GameButtons',
    methods: {

        newGame: function () {
            let options = {
                headers: { "Content-Type": "application/json" },
                url: 'http://localhost:9000/newGame',
                method: "get",
            };
            console.log(options.url);
            axios(options).then(response => response.data);
        },

        redo: function () {
            let options = {
                headers: { "Content-Type": "application/json" },
                url: 'http://localhost:9000/redo',
                method: "get",
            };
            console.log(options.url);
            axios(options).then(response => response.data);
        },

        undo: function () {
            let options = {
                headers: { "Content-Type": "application/json" },
                url: 'http://localhost:9000/undo',
                method: "get",
            };
            console.log(options.url);
            axios(options).then(response => response.data);
        }
    }
}

</script>