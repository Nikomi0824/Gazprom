<template>
    <section>
        <h2>ЭТАПЫ КОНКУРСА</h2>
        <div>
            <AcardionItems v-for="(item, index) in items" :key="index" :item="item"></AcardionItems>
        </div>
    </section>
</template>


<script>
import AcardionItems from '../Acardion/AcardionItems.vue';
export default {
    name: 'StagesBlock',
    components:{
        AcardionItems,
    },
    data: () => {
        return {
            items: [
                {
                    title: "Регистрация(до 20 октября)",
                    text:''
                },
                {
                    title: "Анкета (до 31 октября)",
                    text: ''
                },
                {
                    title: "Дистанционный этап (ноябрь - декабрь)",
                    text: ''
                },
                 {
                    title: "Управленческие решения (январь 2024 года)",
                    text: ''
                },
                 {
                    title: "Задача (февраль 2024 года)",
                    text: ''
                },
                {
                    title: "Очный этап (март 2024 года)",
                    text: ''
                },
                {
                    title: "Финал (апрель 2024 года)",
                    text: ''
                },

            ],
        }
    },
}
</script>

<style lang="scss" scoped>


</style>