<template>
  <div class="game">
    <GameBoard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import GameBoard from '@/components/GameBoard.vue'

export default {
  name: 'Game',
  components: {
    GameBoard
  }
}
</script>
