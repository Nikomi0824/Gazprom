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
                    title: "Регистрация(до 20 октября)"
                },
                {
                    title: "Анкета (до 31 октября)"
                },
                {
                    title: "Дистанционный этап (ноябрь - декабрь)"
                },
                 {
                    title: "Управленческие решения (январь 2024 года)"
                },
                 {
                    title: "Задача (февраль 2024 года)"
                },
                {
                    title: "Очный этап (март 2024 года)"
                },
                {
                    title: "Финал (апрель 2024 года)"
                },

            ],
        }
    },
}
</script>

<style lang="scss" scoped>


</style>