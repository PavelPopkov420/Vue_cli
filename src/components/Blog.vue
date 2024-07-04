<template>
    <div>
        <section>
            <div class="banner-blog">
                <div class="banner-blog__info container">
                    <div class="banner-blog__info__inner">
                        <h2 class="banner-blog__info__inner__title">
                            Статьи & Новости
                        </h2>
                        <p class="banner-blog__info__inner__subtitle">
                            Домой / Блог
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="latest-post container">
                <h2 class="latest-post__title">
                    Последний пост
                </h2>
                <div class="latest-post__info">
                    <img src="../assets/Image_last_post.png" alt="kitchen" class="latest-post__info__image">
                    <div class="latest-post__info__article">
                        <h3 class="latest-post__info__article__title">
                            Low Cost Latest Invented Interior Designing Ideas
                        </h3>
                        <p class="latest-post__info__article__subtitle">
                            С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности
                            для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры
                            импровизировали в работе над макетами, изображая текст при помощи волнистых линий.
                            С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более
                            реалистичный способ обозначения расположения текста на странице.
                        </p>
                        <div class="latest-post__info__article__footer">

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>

<style scoped lang="scss">
.banner-blog {
    margin-top: 44px;
    display: flex;
    justify-content: center;
    align-items: end;
    min-height: 452px;
    background-image: url(../assets/backgraund_blgo.png);
    background-repeat: no-repeat;

    &__info {
        background-color: #ffff;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        height: 274px;
        width: 503px;

        &__inner {
            padding: 41px 78px;
            display: flex;
            flex-direction: column;
            align-items: center;

            &__title {
                font-weight: 500;
                font-family: Open Sans;
                font-style: normal;
                font-size: 50px;
                color: #292f36;
            }

            &__subtitle {
                width: 125px;
                font-family: Jost;
                font-style: normal;
                font-size: 22px;
                color: #4d5053;
            }
        }
    }
}

.latest-post {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 27px;

    &__title {
        font-weight: 500;
        font-family: Open Sans;
        font-style: normal;
        font-size: 50px;
        color: #292f36;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        padding: 23px;

        &__article {
            width: 469px;
            padding-right: 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;

            &__title {
                font-weight: 500;
                font-family: "DM Serif Display", serif;
                font-style: normal;
                font-size: 25px;
                color: #292f36;
            }

            &__subtitle {
                font-family: Jost;
                font-style: normal;
                font-size: 22px;
                color: #4d5053;
            }


        }
    }
}
</style>
