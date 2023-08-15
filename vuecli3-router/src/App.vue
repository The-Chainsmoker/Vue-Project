<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/about" tag="button" replace>about</router-link>

    <KeepAlive>
      <router-view />
    </KeepAlive>
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

.name {
  background-color: #42b983;
}
</style>
