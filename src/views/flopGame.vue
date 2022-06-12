<template>
  <div>
    <div class="flopBox">
      <div class="flopOnly" v-for="(item,index) in arr" :key="item.id" @click="clickFlop(item,index)">
       <img :src="item.url" alt="" srcset="">
    </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// {url:require('./img/card.png')}
export default {
  setup () {
    const state = reactive({
      count: 0,
      arr: [
        { url: require('./img/card.png'), id: 0 },
        { url: require('./img/card.png'), id: 1 },
        { url: require('./img/card.png'), id: 2 },
        { url: require('./img/card.png'), id: 3 }
      ],
      arr1: [
        [{ url: require('./img/1.png'), id: 1 },
          { url: require('./img/2.png'), id: 2 },
          { url: require('./img/1.png'), id: 1 },
          { url: require('./img/2.png'), id: 2 }],
        [{ url: require('./img/3.png'), id: 3 },
          { url: require('./img/4.png'), id: 4 },
          { url: require('./img/3.png'), id: 3 },
          { url: require('./img/4.png'), id: 4 }],
        [{ url: require('./img/5.png'), id: 5 },
          { url: require('./img/6.png'), id: 6 },
          { url: require('./img/5.png'), id: 5 },
          { url: require('./img/6.png'), id: 6 }],
        [{ url: require('./img/7.png'), id: 7 },
          { url: require('./img/8.png'), id: 8 },
          { url: require('./img/7.png'), id: 7 },
          { url: require('./img/8.png'), id: 8 }],
        [{ url: require('./img/9.png'), id: 9 },
          { url: require('./img/10.png'), id: 10 },
          { url: require('./img/9.png'), id: 9 },
          { url: require('./img/10.png'), id: 10 }],
        [{ url: require('./img/11.png'), id: 11 },
          { url: require('./img/12.png'), id: 12 },
          { url: require('./img/11.png'), id: 11 },
          { url: require('./img/12.png'), id: 22 }],
        [{ url: require('./img/13.png'), id: 13 },
          { url: require('./img/14.png'), id: 14 },
          { url: require('./img/13.png'), id: 13 },
          { url: require('./img/14.png'), id: 14 }],
        [{ url: require('./img/15.png'), id: 15 },
          { url: require('./img/16.png'), id: 16 },
          { url: require('./img/15.png'), id: 15 },
          { url: require('./img/16.png'), id: 16 }],
        [{ url: require('./img/17.png'), id: 17 },
          { url: require('./img/18.png'), id: 18 },
          { url: require('./img/17.png'), id: 17 },
          { url: require('./img/18.png'), id: 18 }],
        [{ url: require('./img/19.png'), id: 19 },
          { url: require('./img/20.png'), id: 20 },
          { url: require('./img/19.png'), id: 19 },
          { url: require('./img/20.png'), id: 20 }],
        [{ url: require('./img/21.png'), id: 21 },
          { url: require('./img/22.png'), id: 22 },
          { url: require('./img/21.png'), id: 21 },
          { url: require('./img/22.png'), id: 22 }]
      ],
      arr2: [],
      flag: ''
    })

    const func = setTimeout(() => {
      state.arr2 = state.arr1[Math.floor(Math.random() * state.arr1.length)]
    }, 0)
    const clickFlop = (item, index) => {
      if (item.url.indexOf('card') === -1) {
        return
      }
      if (item.url) { item.url = state.arr2[index].url }
      setTimeout(() => {
        if (state.flag === '') {
          state.flag = state.arr2[index].id
          return
        }
        console.log(state.flag, 'wwww')
        console.log(state.arr2[index].id, 'ssss')
        if (state.arr2[index].id !== state.flag) {
          item.url = require('./img/card.png')
        } else {
          state.flag = ''
        }
        const arr3 = []
        state.arr.map((item) => {
          if (!arr3.includes(item.url) && item.url.indexOf('card') === -1) { arr3.push(item.url) }
        })
        console.log(arr3, ' state.arr3')
        if (arr3.length === state.arr.length / 2) {
          alert(1111)
        }
      }, 500)
    }
    return {
      ...toRefs(state),
      clickFlop,
      func
    }
  }
}
</script>

<style lang="less" scoped>
.flopBox {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0px;
  padding: 0 88px;
  box-sizing: border-box;
  .flopOnly {
    width: 253px;
    height: 338px;
    float: left;
    margin-left: 60px;
    margin-top: 45px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .flopOnly:nth-child(1) {
    margin-left: 0;
  }
  .flopOnly:nth-child(3) {
    margin-left: 0;
  }
}
</style>
