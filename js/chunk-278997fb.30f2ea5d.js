(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-278997fb"],{"568f":function(t,e,o){"use strict";o("c457")},"7d36":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"game"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-2"}),o("div",{staticClass:"col-md-8"},[o("GameButtons"),o("GameBoard")],1),o("div",{staticClass:"col-md-2"})])])])},s=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"btn-toolbar",attrs:{role:"toolbar"}},[o("div",{staticClass:"d-grid gap-2 d-md-block col-12 mx-auto",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button",id:"undo-button"},on:{click:function(e){return t.undo()}}},[t._v("Undo")]),o("button",{staticClass:"btn btn-secondary",attrs:{type:"button",id:"redo-button"},on:{click:function(e){return t.redo()}}},[t._v("Redo")]),o("button",{staticClass:"btn btn-success",attrs:{type:"button",id:"redo-button"},on:{click:function(e){return t.newGame()}}},[t._v("New Game")])])])},i=[],r=o("bc3a"),c=o.n(r),l={name:"GameButtons",methods:{newGame:function(){let t={headers:{"Content-Type":"application/json"},url:this.$parent.applicationHost+"/newGame",method:"get"};console.log(t.url),c()(t).then(t=>t.data)},redo:function(){let t={headers:{"Content-Type":"application/json"},url:this.$parent.applicationHost+"/redo",method:"get"};console.log(t.url),c()(t).then(t=>t.data)},undo:function(){let t={headers:{"Content-Type":"application/json"},url:this.$parent.applicationHost+"/undo",method:"get"};console.log(t.url),c()(t).then(t=>t.data)}}},d=l,u=o("2877"),p=Object(u["a"])(d,n,i,!1,null,null,null),m=p.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"GameBoard"},t._l(t.rows,(function(e){return o("tr",{key:e},t._l(t.cols,(function(a){return o("td",{key:a},[o("img",{staticClass:"field",attrs:{src:t.getTile(e-1,a-1),id:"field-"+e+"-"+a},on:{click:function(o){return t.moveTile(e-1,a-1)}}})])})),0)})),0)},g=[];class b{constructor(){this.game=[];for(var t=0;t<8;t++){this.game[t]=[];for(var e=0;e<8;e++)this.game[t][e]=Array(3)}}fill(t){let e=t.game.board.cells;for(let o=0;o<e.length;o++)this.game[e[o].y][e[o].x][0]=e[o].color,"None"!==e[o].piece.piececolor&&"isKicked"!==e[o].piece.kicked&&(this.game[e[o].y][e[o].x][1]=e[o].piece.piececolor,"isQueen"===e[o].piece.queen&&(this.game[e[o].y][e[o].x][2]=!0))}}var w={name:"GameBoard",data:function(){var t="/websocket",e=this.$parent.websocketServer+t;return{gameBoard:new b,websocket:new WebSocket(e),rows:8,cols:8,scol:-1,srow:-1}},methods:{getTile(t,e){var o="/assets/images/game/",a=this.$parent.applicationHost+o;return void 0!==this.gameBoard.game[t][e][1]?!0===this.gameBoard.game[t][e][2]?a+this.gameBoard.game[t][e][0]+this.gameBoard.game[t][e][1]+"queen.jpg":a+this.gameBoard.game[t][e][0]+this.gameBoard.game[t][e][1]+".jpg":a+this.gameBoard.game[t][e][0]+".jpg"},moveTile(t,e){if(-1===this.scol&&-1===this.srow)this.srow=t,this.scol=e;else{let o={headers:{"Content-Type":"application/json"},url:this.$parent.applicationHost+"/move/sx="+this.scol+"/sy="+this.srow+"/dx="+e+"/dy="+t,method:"get"};console.log(o.url),this.getRequest(o),this.srow=-1,this.scol=-1}},getRequest:function(t){c()(t).then(t=>t.data)},updateGameBoard(t){this.gameBoard=new b,this.gameBoard.fill(t)},initGame:async function(){let t={headers:{"Content-Type":"application/json"},url:this.$parent.applicationHost+"/jsonGame",method:"get"},e=await c()(t).then(t=>t.data);this.gameBoard=new b,this.gameBoard.fill(e)},connectWebSocket(){this.websocket.setTimeout,this.websocket.onopen=()=>{console.log("Connected to Websocket")},this.websocket.onclose=()=>{console.log("Connection with Websocket Closed!")},this.websocket.onerror=t=>{console.log("Error in Websocket Occured: "+t)},this.websocket.onmessage=t=>{if("string"===typeof t.data){let e=JSON.parse(t.data);this.updateGameBoard(e)}}}},created(){this.initGame(),this.connectWebSocket()}},f=w,k=Object(u["a"])(f,h,g,!1,null,null,null),v=k.exports,B={name:"Game",data:function(){return{applicationHost:"https://webapplications-group06-ws2122.herokuapp.com",websocketServer:"wss://webapplications-group06-ws2122.herokuapp.com"}},components:{GameButtons:m,GameBoard:v}},C=B,y=(o("568f"),Object(u["a"])(C,a,s,!1,null,null,null));e["default"]=y.exports},c457:function(t,e,o){}}]);
//# sourceMappingURL=chunk-278997fb.30f2ea5d.js.map