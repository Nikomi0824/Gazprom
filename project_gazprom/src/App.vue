<template>
  <div id="app">
    <nav>
      <LayoitBlock class="LayoitBlock"/>
    </nav>
    <FooterBlock/>
  </div>
</template>


<script>
import LayoitBlock from './views/Layot/Layot.vue'
import FooterBlock from './components/Footer/FooterBlock.vue';
export default{
  
  components:{
    FooterBlock,
    LayoitBlock,
  }
}
</script>

<style lang="scss">
@import "./assets/global.css";


#app {
  
}
.LayoitBlock{
  
  max-width: 100%;
  padding: 0 40px;
  margin: 0 auto;
}

</style>
