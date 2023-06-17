<template>
    <section>
        <BanerBlock></BanerBlock>
        <OpprtunitiesBlock class="OpprtunitiesBlock"></OpprtunitiesBlock>
        <WhoCanTakePart></WhoCanTakePart>
        <StagesBlock></StagesBlock>
    </section>
</template>


<script>
import BanerBlock from '@/components/Banner/BanerBlock.vue';
import OpprtunitiesBlock from '@/components/Opportunities/OpprtunitiesBlock.vue';
import WhoCanTakePart from '@/components/WhoCanTakePart/WhoCanTakePart.vue';
import StagesBlock from '@/components/Stages/StagesBlock.vue';
export default{
    name:'MainPage',
    components:{
        BanerBlock,
        OpprtunitiesBlock,
        WhoCanTakePart,
        StagesBlock,
    }
   
}
</script>

<style lang="scss" scoped>

.OpprtunitiesBlock{
    margin: 160px 40px 160px 40px;
}
</style>