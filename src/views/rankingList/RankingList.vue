<template>
  <div class="rank">
    <img class="bgImg" src="./img/bg.png" alt="">
    <div class="rank-con">
      <div class="back-icon" @click="back">
        <img src="./img/back.png" alt="">
      </div>
      <div class="audio-con">
        <Audio :audioSrc="audioSrc"></Audio>
      </div>
      <div class="share-icon"></div>
      <div class="rankList-con">
        <div class="list">
          <div class="list-head">
            <div>名次</div>
            <div>用戶</div>
            <div>成績</div>
          </div>
          <div class="list-con">
            <div class="every" v-for="(item,index) in list" :key="index">
              <div>

                <span v-if="item.rank === 1" class="first-bg"></span>
                <span  v-else-if="item.rank === 2" class="second-bg"></span>
                <span  v-else-if="item.rank === 3" class="third-bg"></span>
                <span v-else>{{item.rank}}</span>
              </div>
              <div>
                <img :src="item.portrait" alt="">
                <span>{{item.name}}</span>
              </div>
              <div>{{item.result}}</div>
            </div>
          </div>
        </div>

      </div>
      <div class="back-game">
        <div class="back-btn"></div>
      </div>
    </div>
    <Dialog :level="2" :time="10" :prizeArr="prizeArr"></Dialog>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Audio from '@/components/Audio.vue'
import Dialog from '@/components/Dialog.vue'

export default {
  components: {
    Audio,
    Dialog
  },
  setup () {
    const state = reactive({
      count: 0,
      audioSrc: 'http://music.163.com/song/media/outer/url?id=1908673805.mp3',
      list: [
        { rank: 1, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 2, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 3, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 4, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 5, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 6, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 7, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 8, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 9, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 10, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 11, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 12, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 13, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 14, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' },
        { rank: 15, portrait: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500', name: '阿巴阿阿巴阿巴阿巴阿巴阿巴巴阿巴阿巴阿巴', result: '55s' }
      ],
      prizeArr: [
        { prizeText: '金幣*1000', prizeImg: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500' },
        { prizeText: '金幣*1000', prizeImg: 'https://img2.baidu.com/it/u=2320275155,472234538&fm=253&fmt=auto&app=138&f=JPEG?w=663&h=500' }
      ]
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
  overflow: hidden;
  .bgImg{
    width: 100%;
    display: block;
  }
  .rank-con{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    .back-icon{
      position: absolute;
      width: 100px;
      height: 62px;
      left: -40px;
      top: 40px;
      img{
        width: 100%;
        height: 50px;
      }
    }
    .audio-con{
      position: absolute;
      right: 18px;
      top: 38px;
      width: 64px;
      height: 64px;
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
    .rankList-con{
      width: 100%;
      padding: 265px 64px 0;
      box-sizing: border-box;
      .list{
        width: 100%;
        height: 862px;
        background: #fff;
        border: 1px solid #EE93AD;
        .list-head{
          width: 100%;
          height: 62px;
          line-height: 62px;
          text-align: center;
          border-bottom:1px solid #EE93AD;
          color: #EC7D9D;
          font-weight: 600;
          display: flex;
          :first-child{
            width: 140px;
          }
          :last-child{
            width: 160px;
          }
          :nth-child(2){
            width: calc(100% - 300px);
          }
        }
        .list-con{
          width: 100%;
          height: 800px;
          overflow: auto;
          .every{
            width: 100%;
            height: 68px;
            // padding-top: 20px;
            // box-sizing: border-box;
            margin-top: 20px;
            text-align: center;
            display: flex;
            :first-child{
              width: 140px;
              line-height: 68px;
              font-size: 24px;
              font-family: SourceHanSansCN;
              font-weight: 400;
              color: #000000;
              display: flex;
              /* 水平居中 */
              justify-content: center;
              /* 垂直居中 */
              align-items: center;

              span{
                display: inline-block;
                width: 44px;
                height: 44px;
                line-height: 44px;
                text-align: center;
              }
              .first-bg{
                background: url('./img/first.png') no-repeat 0 0;
                background-size: 100% 100%;
              }
              .second-bg{
                background: url('./img/second.png') no-repeat 0 0;
                background-size: 100% 100%;
              }
              .third-bg{
                background: url('./img/third.png') no-repeat 0 0;
                background-size: 100% 100%;
              }
            }
            :last-child{
              width: 160px;
              line-height: 68px;
              font-size: 24px;
              font-family: SourceHanSansCN;
              font-weight: 400;
              color: #000000;
            }
            :nth-child(2){
              width: calc(100% - 300px);
              text-align: left;
              // padding-top: 6px;
              // box-sizing: border-box;
              line-height: 68px;
              display: flex;
              img{
                width: 48px;
                height: 48px;
                vertical-align: middle;
                margin-top: 10px;
              }
              span{
                padding-left: 10px;
                box-sizing: border-box;
                display: inline-block;
                vertical-align: middle;
                width: calc((100% - 48px));
                height: 62px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size: 24px;
                font-family: SourceHanSansCN;
                font-weight: 400;
                color: #000000;
              }
            }
          }
        }
      }
    }
  }
  .back-game{
    width: 100%;
    position: relative;
    padding-top: 30px;
    padding-right: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: right;
    .back-btn{
      width: 276px;
      height: 100px;
      background: url("./img/backgame.png") no-repeat 0 0;
      background-size: 100% 100%;
      margin-right: 10px;
    }
  }
}

</style>
