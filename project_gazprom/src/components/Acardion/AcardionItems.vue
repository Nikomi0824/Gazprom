<template>
    <section>
        <div class="Shell">
            <div class="head">
                <h3 >{{ item.title }}</h3>
                <button @click="Accordion()">
                    <img  class="img1" src="/image/Line 5.png" alt="">
                    <img :style="Activ===true ? transform: `rotate(${90}}deg)` " class="img2" src="/image/Line 5.png" alt="">

                </button>
            </div>
            <p v-show="Activ === true">{{ item.text }}</p>
        </div>
    </section>
</template>


<script>
export default {
    name: 'AcardionItems',
    props: {
        item: Object
    },
    data(){
        return{
            Activ: false,
        }
    },
    methods:{
         Accordion() {
            this.Activ=!this.Activ
        }
    }
}
</script>

<style lang="scss" scoped>
section{
    .Shell{
        max-width: 100%;
        width: 1362px;
        margin: 0 auto;
        background-color: #F5F5F5;
        margin-bottom:8px ;
        .head{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            h3{
                padding-left: 40px;
            }
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;
                border-radius: 50%;
                width: 62px;
                height: 62px;
                margin-right:42px;
                .img1{
                    position: absolute;
                    transform: rotate(90deg);

                }
                
            }
            
        }

    }
}

</style>