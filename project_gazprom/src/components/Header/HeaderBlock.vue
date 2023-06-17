<template>
    <section>
        <img src="/image/Logo_GAzprom.png" alt="logo">
        <p>РЕГИСТРАЦИЯ НА ПЕРВЫЙ СЕЗОН НАЧНЕТСЯ <span>15 ОКТЯБРЯ</span> 2023 ГОДА</p>
        <button>ЛИЧНЫЙ КАБИНЕТ</button>
    </section>
</template>

<script>

export default{
    name:'HeaderBlock',
}

</script>


<style lang="scss" scoped>
section{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items:flex-end ;
    
    img{
        
        width: 193px;
        height: 101px;
    }
   
    p{

        padding-bottom: 10px;
        margin: 0 20px;
        font-weight: 700;
        font-size: 25px;
        line-height: 37px;
        
        span{
            background-color: #0079C2;
            color: white;
            margin: 20px 0;
            
        }
    }
    
    button{
        font-weight: 700;
        font-size: 26px;
        line-height: 37px;
        border-radius: 0px;
        border: none;
        
    }
}

</style>