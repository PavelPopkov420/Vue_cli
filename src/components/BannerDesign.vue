<template>
    <div class="banner-design">
        <div class="banner-design__intro container">
            <h2 class="banner-design__intro__title">
                Наш проект
            </h2>
            <div class="banner-design__intro__subtitle">
                <a href="/" class="banner-design__intro_subtitle__link">Домой</a>
                <p class="banner-design__intro_subtitle__el">/</p>
                <a href="/project" class="banner-design__intro_subtitle__link">Проект</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerDesign'
}

</script>


<style scoped lang="scss">
a:visited {
    color: #292f36;
}

.banner-design {
    margin-top: 50px;
    height: 356px;
    background-image: url(../assets/banner_design.png);
    background-repeat: no-repeat;
    display: flex;
    align-items: end;

    &__intro {
        display: flex;
        flex-direction: column;
        width: 504px;
        height: 178px;
        background-color: #ffff;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        padding: 41px 100px;

        &__title {
            font-weight: 500;
            font-family: Open Sans;
            font-style: normal;
            font-size: 50px;
            color: #292f36;
        }

        &__subtitle {
            display: flex;
            justify-content: center;
            font-family: Jost;
            font-style: normal;
            font-size: 22px;

            &__link {
                color: #4d5053;
            }

            &__el {
                color: #4d5053;
            }
        }
    }
}
</style>