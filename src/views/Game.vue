<template>
  <div class="game">
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <!--Inner Componente-->
          <GameButtons/>
          <GameBoard/>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import GameButtons from '@/components/GameButtons.vue'
import GameBoard from '@/components/GameBoard.vue'

export default {
  name: 'Game',
  components: {
    GameButtons,
    GameBoard
  }
}
</script>

<style>
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