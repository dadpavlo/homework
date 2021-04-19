<template>
  <div id="app">
    <!-- <all-posts></all-posts>
    <side-bar></side-bar> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import SideBar from './components/SideBar'
// import AllPosts from './components/AllPosts';


export default {
  name: 'App',
  components: {
    // SideBar,
    // AllPosts
  }
}
</script>

<style>
#app {
    font-family: 'Inconsolata', monospace;
    margin: 0;
    background-color: rgb(37, 37, 37);
}
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap');</style>
