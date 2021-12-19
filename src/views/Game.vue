<template>
  <div class="game">
    <GameBoard/>
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
