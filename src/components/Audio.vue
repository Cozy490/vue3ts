<template>
  <div class="audio" @click="play">
    <img class="an" src="./img/audio.png" alt="">
    <audio ref="audioDom" controls loop auto :src="audioSrc" class="audio-icon" >

    </audio>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, ref } from 'vue'

export default {
  props: ['audioSrc'],
  setup (props) {
    onMounted(() => {
      document.addEventListener('visibilitychange', function () {
        const string = document.visibilityState
        if (string !== 'visible') {
          suspend()
        }
      })
      window.addEventListener('touchstart', function () {
        play()
      })
    })
    const state = reactive({
      count: 0
    })
    const audioDom = ref<HTMLElement | null>(null)
    const play = () => {
      if (props.audioSrc !== '' && (audioDom.value as HTMLAudioElement).paused) {
        (audioDom.value as HTMLAudioElement).play()
      }
    }
    const suspend = () => {
      if (!(audioDom.value as HTMLAudioElement).paused) {
        (audioDom.value as HTMLAudioElement).pause()
      }
    }

    return {
      ...toRefs(state),
      play,
      audioDom,
      suspend
    }
  }
}
</script>

<style lang="less" scoped>
.audio{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  text-align: center;
  img{
      width: 100%;
      height: 100%;
  }
  @-webkit-keyframes rotation{
      from {-webkit-transform: rotate(0deg);}
      to {-webkit-transform: rotate(360deg);}
  }
  .an{
      -webkit-transform: rotate(360deg);
      animation: rotation 3s linear infinite;
      -moz-animation: rotation 3s linear infinite;
      -webkit-animation: rotation 3s linear infinite;
      -o-animation: rotation 3s linear infinite;
  }
  .audio-icon{
    // visibility: hidden;
    display: none;
  }
}
</style>
