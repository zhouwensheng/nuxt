<template>
  <div style="width:80%;max-width:1000px;margin:0 auto;padding-bottom:80px;">
    <div class="navigation-class-box">
      <div class="navigation-class-box-div">
        <img src="~/static/logo.jpg" alt="logo">
        <ul class="fr">
          <li class="fl" :class="{'list':clickname == 1}">
            <nuxt-link to="/">
              首页
            </nuxt-link> 
          </li>
          <li class="fl" :class="{'list':clickname == 2}">
            <nuxt-link to="/katong">
              图片
            </nuxt-link>
          </li>
          <li class="fl" :class="{'list':clickname == 3}">
            <nuxt-link to="/music">
              音乐
            </nuxt-link>
          </li> 
          <li class="fl" :class="{'list':clickname == 4}">
            <nuxt-link to="/book">
              书
            </nuxt-link>
          </li> 
          <li class="fl" :class="{'list':clickname == 5}">
            <nuxt-link to="/VideoList">
              视频
            </nuxt-link>
          </li> 
          <li class="fl" :class="{'list':clickname == 8}">
            <nuxt-link to="/chitchat">
              聊天
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="Applocation" :class="{'Applocationblock':Stick}" @click='getApplocation()'>
      置顶
    </div>
    <div class="app2">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Stick: false,
      clickname:1,
      jurisdiction:[]
    }
  },
  watch: {
      '$route':'getPath'
  },
  methods: {
    // 监听路由
    getPath(data,data2){
        let name = this.$route.fullPath.split('/')[1];
        if(name == 'index'){
            this.clickname = 1;
        }else if(name == 'katong'){
            this.clickname = 2;
        }else if(name == 'music'){
            this.clickname = 3;
        }else if(name =='book'){
            this.clickname = 4;
        }else if(name =='VideoList'){
            this.clickname = 5;
        }else if(name =='Email'){
            this.clickname = 6;
        }else if(name =='uploading'){
            this.clickname = 7;
        }else if(name =='chitchat'){
            this.clickname = 8;
        }
    },
    // 置顶
    getApplocation() {
      let clear = setInterval(() => {
        let top = document.documentElement.scrollTop;
        let scrolltop = top / 10;
        top = top - scrolltop;
        if (top > 10) {
          window.document.documentElement.scrollTop = top;
        } else {
          window.document.documentElement.scrollTop = 0;
          clearInterval(clear);
        }
      }, 10);
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 500) {
        this.Stick = true;
      } else {
        this.Stick = false;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.navigation-class-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
}
.navigation-class-box > .navigation-class-box-div {
  width: 80%;
  width: 1000px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}
.navigation-class-box > .navigation-class-box-div > img {
  width: 40px;
  margin-top: 10px;
}
.navigation-class-box > .navigation-class-box-div > ul {
  width: 70%;
  min-width: 800px;
  height: 100%;
}
.navigation-class-box > .navigation-class-box-div > ul > li {
  height: 100%;
  font-size: 18px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color:#20a0ff !important;
    
  }
  &:hover a{
    color:#fff !important;
  }
}
.navigation-class-box > .navigation-class-box-div > ul > .list{
  background-color:#20a0ff !important;
  a{
    color:#fff !important;
  }
}
.navigation-class-box > .navigation-class-box-div > ul > li > a{
  display: inline-block;
  height: 100%;
  text-align: center;
  padding: 0 20px;
}
.app1 {
  margin-top: 60px;
  width: 20%;
  float: left;
  box-sizing: border-box;
  height: 500px;
  background-color: #42b983;
  ul {
    height: 100%;
    li {
      
      height: 30px;
      line-height: 30px;
      width: 100%;
      cursor: pointer;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #fff;
      }
    }
  }
}
.app2 {
  width: 80%;
  min-width: 980px;
  box-sizing: border-box;
  margin: 80px auto;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1,
h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.quit{
  padding: 0 10px;
  color: #42b983;
}
.quit:hover{
  color:#fff;
}
.Applocation {
  width: 50px;
  height: 50px;
  box-shadow: 0 0 2px #000;
  border-radius: 50%;
  background: #fff;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99999;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  display: none;
}
.Applocationblock {
  display: block;
  animation: myfirst 1.5s;
  -moz-animation: myfirst 1.5s;
  /* Firefox */
  -webkit-animation: myfirst 1.5s;
  /* Safari 和 Chrome */
  -o-animation: myfirst 1.5s;
  /* Opera */
  animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
}
@keyframes myfirst {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes myfirst {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes myfirst {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes myfirst {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
