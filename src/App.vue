<template>
  <div id=app>
    <!--Menu Bar-->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <!--Branding-->
        <router-link class="navbar-brand" to="/">Checkers</router-link>
        <!--Toggle Button-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--Other Items-->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!--<li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>-->
            <li class="nav-item active">
              <router-link class="nav-link" to="/tutorial">Tutorial</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/game">Game</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <!--Content-->
      <router-view/>
  </div>
</template>