<template>
  <div id=app>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="startscreen">Checkers</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
              <!--<router-link to="/">Home</router-link>-->
              <!--<a class="nav-link" href="tutorial">Tutorial</a>-->
            </li>

            <li class="nav-item active">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>

            <li class="nav-item active">
              <router-link class="nav-link" to="/test">Test</router-link>
            </li>

            <!--<li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="currentGame" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Aktuelles Spiel
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="currentGame">Neu laden</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="newGame">Neues Spiel erstellen</a>
              </div>
            </li>-->
          </ul>
        </div>
      </nav>
      <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
