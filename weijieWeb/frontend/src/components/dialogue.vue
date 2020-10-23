<template>
  <div class="back" :style="backStyle">
    <div class="dial">
      <div style="text-align:left;margin:1em">
        <span>添加快捷方式</span>
      </div>
      <div style="text-align:left">
        <ul>
          <li>
            <p>名称</p>
            <input type="text" v-model="name" key="name" autofocus/>
          </li>
          <li>
            <p>网址</p>
            <input type="text" v-model="link" key="link"/>
          </li>
          <li style="text-align:right">
            <button class="button-glow button-border button-rounded button-primary" @click="handleConfirm">确认</button>
            <button class="button-glow button-border button-rounded button-primary" @click="handleCancel">取消</button>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
import inputNormal from './input_normal'
export default {
  name:'dialogue',
  components:{
    inputNormal,
  },
  data: () => ({
    backStyle:'',
    name:'',
    link:'',
  }),
  methods:{
    handleConfirm(){
      localStorage.setItem('name', this.name);
      localStorage.setItem('link', this.link);
      let iconUrl = this.link+'/favicon.ico'
      this.$store.dispatch('searchEngine/changeNameSC', this.name)
      this.$store.dispatch('searchEngine/changeIconUrl', iconUrl)
      this.handleCancel();
    },
    handleCancel(){
      this.backStyle="display:none"
      this.$store.state.searchEngine.showDialogue=false;
    },
  }
}
</script>

<style lang="scss" scoped>
.back{
  background: rgba(0, 0, 0, 0.4);
  height:100%;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
}
.dial{
  height:auto;
  width:400px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}
p{
  margin:0px;
}
ul{
  list-style:none;
  margin:1em;
  padding:0;
}
li{
  margin-top:20px;
  display: block;
  position:relative;
}
input{
  width:100%;
  height:2em;
  outline:none;
  border:none; 
  background-color: #FFFFF0	;
  border-bottom: 1px solid #c3c3c3;
  font-size: 16px;
  transition: all 2s ease-out;
}
input:focus{
  border-bottom: 1px solid skyblue;
}
button{
  color: #666;
    background-color: #EEE;
    border-color: #EEE;
    font-weight: 300;
    font-size: 16px;
    font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    height: 40px;
    padding: 0 40px;
    margin: 0;
    display: inline-block;
    appearance: none;
    cursor: pointer;
    border: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    margin:0 10px 0 10px;
}
button:hover{
      color: #1B9AF7;

}
.button-glow {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: glowing;
    animation-name: glowing;
}
.button-border {
    background: none;
    border-width: 2px;
    border-style: solid;
    line-height: 36px;
}
.button-rounded {
    border-radius: 4px;
}
.button-primary:hover,.button-primary:focus {
    -webkit-animation-name: glowing-primary;
    animation-name: glowing-primary;
    outline: none;
}
@keyframes glowing-primary{
  from {
    -webkit-box-shadow: 0 0 0 rgba(27, 154, 247, 0.3);
    box-shadow: 0 0 0 rgba(27, 154, 247, 0.3);
    }
  50% {
    -webkit-box-shadow: 0 0 20px rgba(27, 154, 247, 0.8);
    box-shadow: 0 0 20px rgba(27, 154, 247, 0.8);
    }
  to {
    -webkit-box-shadow: 0 0 0 rgba(27, 154, 247, 0.3);
            box-shadow: 0 0 0 rgba(27, 154, 247, 0.3); }

}

</style>