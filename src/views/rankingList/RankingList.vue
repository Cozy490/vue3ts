<template>
  <div class="rank">
    <img class="bgImg" src="./img/bg.png" alt="">
    <div class="rank-con">
      <div class="back-icon" @click="back"></div>
      <div class="audio-con">
        <Audio :audioSrc="audioSrc"></Audio>
      </div>
      <div class="share-icon"></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Audio from '@/components/Audio.vue'

export default {
  components: {
    Audio
  },
  setup () {
    const state = reactive({
      count: 0,
      audioSrc: 'http://music.163.com/song/media/outer/url?id=1908673805.mp3'
    })
    const router = useRouter()
    const back = () => {
      router.back()
    }
    return {
      ...toRefs(state),
      back
    }
  }
}
</script>

<style lang="less" scoped>
.rank{
  width: 100%;
  box-sizing: border-box;
  position: relative;
  .bgImg{
    width: 100%;
  }
  .rank-con{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    .back-icon{
      position: absolute;
      width: 100px;
      height: 60px;
      background-color: aquamarine;
      left: 0;
      top: 40px;

    }
    .audio-con{
      position: absolute;
      right: 18px;
      top: 38px;
      width: 60px;
      height: 60px;
      background-color: aquamarine;
      border-radius: 50%;
      text-align: center;
    }
    .share-icon{
      position: absolute;
      right: 18px;
      top: 118px;
      width: 60px;
      height: 60px;
      background-color: aquamarine;
      border-radius: 50%;
    }
  }
}

</style>
