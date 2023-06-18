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

    margin-top: 48px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:flex-end ;
    
    img{
        
        width: 193px;
        height: 101px;
    }
   
    p{
        font-family: "HeliosCondBlack";
        padding-bottom: 10px;
        margin: 0 20px;
        font-weight: 700;
        font-size: 37px;
        line-height: 37px;
        color: #1D4573;
        
        span{
            background-color: #0079C2;
            color: white;
            padding: 12px 0;
            
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