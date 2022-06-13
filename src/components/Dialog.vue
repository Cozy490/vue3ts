<template>
  <div class="dialog" v-if="dialog">
    <div>
      <img src="./img/dialog1.png" alt="">
    </div>
    <div class="dialog-container">
      <img src="./img/dialog2.png" alt="">
      <div class="dialog-con">
        <div class="close" @click="closeDialog"></div>
        <div class="level">2</div>
        <div class="time">
          34
        </div>
        <div class="prize">
          <div class="prize-type-one" v-if="prizeArr.length === 1">
            <div class="one-con">
              <div class="one">
                <img :src="prizeArr[0].prizeImg" alt="">
              </div>
            </div>
            <div class="coin">{{prizeArr[0].prizeText}}</div>
          </div>

          <div class="prize-type-two" v-else>
            <div class="two">
              <div class="two-con">
                <div class="prize-img-one">
                  <img :src="prizeArr[0].prizeImg" alt="">
                </div>
                <div class="prize-img-two">
                  <img :src="prizeArr[1].prizeImg" alt="">
                </div>
              </div>
            </div>

            <div class="coin">
              <div>{{prizeArr[0].prizeText}}</div>
              <div>{{prizeArr[1].prizeText}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  /**
    组件必传值：
    1：第几关 level(number)
    2：累计用时：time(number)
    3：通关奖品：prizeArr(Array) prizeArr:[{prizeImg:'',prizeText:''}]
 */
  props: ['level', 'time', 'prizeArr'],
  setup () {
    const state = reactive({
      count: 0,
      dialog: true
    })
    const closeDialog = () => {
      state.dialog = false
    }
    return {
      ...toRefs(state),
      closeDialog
    }
  }
}
</script>

<style lang="less" scoped>
.dialog{
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 90px;
  box-sizing: border-box;
  img{
    width: 100%;
  }
  .dialog-container{
    position: relative;
    img{
      width: 100%;
    }
    .dialog-con{
      position: absolute;
      width: 100%;
      top: 0;
      padding-right: 12px;
      box-sizing: border-box;
      .close{
        position: absolute;
        width: 60px;
        height: 60px;
        // background-color: aqua;
        top: 130px;
        right: 0px;
      }
      .level{
        width: 100%;
        height: 48px;
        line-height: 48px;
        // background-color: aqua;
        font-size: 38px;
        color: #EC7D9D;
        font-weight: 700;
        opacity: 0.4;
        margin-top: 260px;
        text-align: center;
      }
      .time{
        width: 74px;
        height: 48px;
        line-height: 1.5;
        text-align: center;
        font-size: 28px;
        // background-color: aquamarine;
        color: #EC7D9D;
        opacity: 0.4;
        margin-left: 300px;
      }
      .prize{
        margin-top: 20px;
        .prize-type-one{
          .one-con{
            display: flex;
            justify-content: center;
            .one{
              width: 120px;
              height: 120px;
              // background-color: aqua;
              background: url("./img/one.png") no-repeat 0 0;
              background-size: 100% 120px;
              img{
                width: 116px;
                height: 116px;
                margin: 2px;
                // border-radius: 10px;
              }
            }
          }
          .coin{
            font-size: 24px;
            text-align: center;
            padding-top: 10px;
            box-sizing: border-box;
            color: #EE93AD;
          }
        }
        .prize-type-two{

          .two{
            width: 100%;
            display: flex;
             justify-content: center;
            .two-con{
              width:290px;
              height: 120px;
              background: url("./img/two.png") no-repeat 0 0;
              background-size: 100% 100%;
              display: flex;
              justify-content: space-between;
              .prize-img-one,.prize-img-two{
                width: 120px;
                height: 120px;
                background-color: aqua;
                opacity: 0.4;
                img{
                  width: 116px;
                  height: 116px;
                  margin: 2px;
                }
              }
            }
          }
          .coin{
            width: 100%;
            font-size: 24px;
            color: #EE93AD;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding-top: 8px;
            box-sizing: border-box;
            :first-child{
              width: 170px;
            }
            :last-child{
              width: 170px;
            }
          }
        }
      }
    }
  }

}
</style>
