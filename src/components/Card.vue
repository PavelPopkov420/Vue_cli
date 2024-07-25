<template>
    <div class="design-card">
        <div class="design-card__favourite" @click="markFavourite">
            <template v-if="favourite">
                ★
            </template>
            <template v-else>
                ☆
            </template>
        </div>
        <img class="design-card__img" :src='image' alt="Photo_card">
        <div class="design-card__info">
            <div class="design-card__info__text">
                <h3 class="design-card__info__text__title">{{ title }}</h3>
                <p class="design-card__info__text__subtitle">{{ subtitle }}</p>
            </div>
            <button class="design-card__info__btn" @click="goToProject()">
                <img class="" src="../assets/Vector_result.svg" alt="">
            </button>
        </div>

    </div>

</template>




<script>
export default {
    name: 'Card',
    props: {
        image: {
            type: String,
            default: () => ' '
        },
        title: {
            type: String,
            default: () => ' '
        },
        subtitle: {
            type: String,
            default: () => ' '
        },
        favourite: {
            type: Boolean,
            default: () => false
        },
        id: {
            type: Number,
            default: () => null
        }


    },
    methods: {
        markFavourite() {
            this.$emit('markFavourite', this.id)
        },
        goToProject() {
            this.$router.push({ name: 'project' })
        }
    }
}
</script>


<style scoped lang="scss">
.design-card {
    font-family: Open Sans;
    font-style: normal;
    width: 585px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 10px;

    &__favourite {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 40px;
    }

    &__info {
        display: flex;
        justify-content: space-between;

        &__text {
            &__title {
                font-weight: 500;
                font-family: Open Sans;
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

        &__btn {
            width: 52px;
            height: 52px;
            border: 0;
            background-color: #f4f0ec;
            border-top-left-radius: 90px;
            border-top-right-radius: 90px;
            border-bottom-left-radius: 90px;
            border-bottom-right-radius: 90px;

        }


    }
}

.design-card__info__name {
    margin-top: 20px;

}
</style>