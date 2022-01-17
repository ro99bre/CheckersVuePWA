<template>
    <div class="btn-toolbar" role="toolbar">
      <div class="d-grid gap-2 d-md-block col-12 mx-auto" role="group">
        <button v-on:click="undo()" type="button" class="btn btn-danger" id="undo-button">Undo</button>
        <button v-on:click="redo()" type="button" class="btn btn-secondary" id="redo-button">Redo</button>
        <button v-on:click="newGame()" type="button" class="btn btn-success" id="redo-button">New Game</button>
        <!--<button type="button" class="btn btn-info" data-toggle="modal" data-target="#loadModal">Load</button>-->
        <!--<button type="button" class="btn btn-success" data-toggle="modal" data-target="#saveModal">Save</button>-->
        <div> Player {{ user.name }}!</div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import { getAuth, signOut } from "firebase/auth"
import { useAuthState } from "@/firebaseinit.js"
//import firebase from "firebase/app"


export default {
    name: 'GameButtons',
    /*
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            } else {
                this.user = '';
            }
        });
    }, */
    data () {
        return {
            user: ''
        };
    },
    setup() {
        const { user } = useAuthState()
        const auth = getAuth()
        const signOutUser = async () => {
        try {
            await signOut(auth)
            this.$router.push('/login')
        } catch (e) {
            alert(e.message)
        }
        }
        return { user, signOutUser }
    },
    methods: {
        
        newGame: function () {
            let options = {
                headers: { "Content-Type": "application/json" },
                url: this.$parent.applicationHost + '/newGame',
                method: "get",
            };
            console.log(options.url);
            axios(options).then(response => response.data);
        },

        redo: function () {
            let options = {
                headers: { "Content-Type": "application/json" },
                url: this.$parent.applicationHost + '/redo',
                method: "get",
            };
            console.log(options.url);
            axios(options).then(response => response.data);
        },

        undo: function () {
            let options = {
                headers: { "Content-Type": "application/json" },
                url: this.$parent.applicationHost + '/undo',
                method: "get",
            };
            console.log(options.url);
            axios(options).then(response => response.data);
        }
    }
}

</script>