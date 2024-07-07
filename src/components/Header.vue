<template>
    <div class="title container">
        <div class="title__left">
            <a href="/">
                <img class="title__logo" src="../assets/Logo.png" alt="Logo">
            </a>
        </div>
        <div class="title__right">
            <a href="/" class="title__right__text">Домой</a>
            <a href="/design" class="title__right__text">Проект</a>
            <a href="/blog" class="title__right__text">Блог</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>


<style scoped lang="scss">
.title {
    margin-top: 44px;
    max-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
        height: 50px;
        width: 177px;
    }

    &__right {
        height: 25px;
        display: flex;
        justify-content: space-between;
        gap: 35px;

        &__text {
            font-style: normal;
            font-family: jost;
            font-size: 20px;
            color: #292f36;
        }
    }
}
</style>