<template>
    <div>
        <Header />
        <div class="error-info container">
            <div class="error-info__text">
                <h1 class="error-info__text__title">
                    404
                </h1>
                <h3 class="error-info__text__subtitle">
                    Приносим извинения, но страница, которую вы искали, не найдена
                </h3>
                <button class="btnHome">Домой</button>
            </div>
            <img class="imgError" src="../assets/404.png" alt="">
        </div>
    </div>
</template>


<script>

import Header from '@/components/Header.vue';


export default {

    name: '404View',
    components: {
        Header,

    }

}

</script>


<style scoped lang="scss">
.error-info {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    gap: 50px;

    &__text {
        display: flex;
        flex-direction: column;
        gap: 25px;

        &__title {
            font-weight: 500;
            font-family: Open Sans;
            font-style: normal;
            font-size: 250px;
            color: #CDA274;
        }

        &__subtitle {
            font-weight: 500;
            font-family: Open Sans;
            font-style: normal;
            font-size: 35px;
            color: #292F36;
        }

    }
}

.btnHome {
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    width: 182px;
    height: 75px;
    background-color: #292f36;
}

.imgError {
    max-width: 50%;

}
</style>