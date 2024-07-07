<template>
    <div class="banner container">
        <h1 class="banner__title">Пусть ваш дом будет уникальным</h1>
        <h3 class="banner__subtitle">Существует много вариаций Lorem Ipsum, которые можно использовать</h3>
        <button class="banner__btn" @click="onStartClick()">
            <p class="banner__btn__text">Начать</p>
            <img class="banner__btn__vector" src="../assets/Vector.svg" alt="vector">
        </button>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        onStartClick() {
            this.$router.push({ name: 'project' });
        }
    }
}
</script>


<style scoped lang="scss">
.banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding-left: 60px;
    min-height: 758px;
    margin-top: 50px;
    background-image: url(../assets/backgraund_image.jpg);

    &__title {
        max-width: 595px;
        width: 100%;
        max-height: 150px;
        font-weight: 400;
        font-family: Open Sans;
        font-style: normal;
        font-size: 65px;
        color: #292f36;
    }

    &__subtitle {
        max-width: 433px;
        max-height: 66px;
        font-weight: 400;
        font-family: jost;
        font-style: normal;
        font-size: 22px;
        color: #4d5053;
    }

    &__btn {
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        width: 182px;
        height: 75px;
        background-color: #292f36;
        cursor: pointer;

        &:hover {}

        &__text {
            font-weight: 600;
            font-family: jost;
            font-style: normal;
            font-size: 18px;
            color: #f4f0ec;


        }
    }
}
</style>