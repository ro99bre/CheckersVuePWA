<template>
  <div class="gameboard">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  props: {
    msg: String
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
