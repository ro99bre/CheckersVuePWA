<template>
  <div class="startscreen">
    <div id="banner">
      <img src="../assets/startscreen/chessboard.jpg" alt="checkers startscreen" usemap="#chessmap"/>
      
      <map name="chessmap">
        <area target="" alt="newGame" title="newGame" href="https://ro99bre.github.io/CheckersVuePWA/#/game" coords="377,563,54" shape="circle">
        <area target="" alt="tutorial" title="tutorial" href="https://ro99bre.github.io/CheckersVuePWA/#/tutorial" coords="1332,559,52" shape="circle">
        <area target="" alt="play" title="play" href="https://ro99bre.github.io/CheckersVuePWA/#/newGame" coords="572,593,440,532" shape="rect">
        <area target="" alt="tutorial" title="tutorial" href="https://ro99bre.github.io/CheckersVuePWA/#/tutorial" coords="1404,531,1602,585" shape="rect">
        <area target="" alt="github project" title="github" href="https://github.com/ro99bre/CheckersWebApp" coords="961,419,22" shape="circle">
      </map>
      <div class="ebuttons">
        <a href="https://ro99bre.github.io/CheckersVuePWA/#/game" id="playbutton">PLAY</a>
        <a href="https://ro99bre.github.io/CheckersVuePWA/#/tutorial" id="tutorialbutton">TUTORIAL</a>
        <a href="https://github.com/ro99bre/CheckersWebApp" id="githubbutton">Github Project</a>
      </div>

    </div>
  </div>
</template>

<style scoped>
  #banner {
    width: 100%;
    height: 100%;
  }
    #banner img {
    width: 100%;
    height: 100%;
  }
  .ebuttons {
    text-align: center;
  }
  #playbutton {
    margin-left: 200px;
    margin-right: 200px;
  }
  #tutorialbutton {
    margin-left: 200px;
    margin-right: 200px;
  }
  #githubbutton {
    margin-left: 200px;
    margin-right: 200px;
  }
</style>