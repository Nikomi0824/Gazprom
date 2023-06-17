<template>
  <div id="app">
    <nav>
      
    </nav>
    <FooterBlock/>
  </div>
</template>


<script>
import FooterBlock from './components/Footer/FooterBlock.vue';
export default{
  
  components:{
    FooterBlock,
  }
}
</script>

<style lang="scss">
@import "./assets/global.css";


#app {
  font-family: HeliosCond;
}


</style>
