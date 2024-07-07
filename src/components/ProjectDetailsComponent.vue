<template>
    <div>
        <section class="project-details-banner"></section>
        <div class="project-details container">
            <h1 class="project-details__title">{{ getTitle }}</h1>
            <p class="project-details__text"> {{ getTextOne }}</p>
            <p class="project-details__text"> {{ getTextTwo }}</p>
            <Slider :sliderData="pictures" />
        </div>

    </div>

</template>


<script>

import Slider from '@/components/Slider.vue';

export default {
    name: 'ProjectDetailsComponent',

    components: {
        Slider
    },

    data() {
        return {
            pictures: [
                {
                    id: 1,
                    name: 'slider.png',
                    alt: 'project1',
                },

                {
                    id: 2,
                    name: 'slider1.png',
                    alt: 'project2',
                },

                {
                    id: 3,
                    name: 'slider2.png',
                    alt: 'project3',
                }],

        }
    },
    computed: {
        getTitle() {
            return this.$store.getters.getTitle
        },
        getTextOne() {
            return this.$store.getters.getTextOne
        },
        getTextTwo() {
            return this.$store.getters.getTextTwo
        }

    }
}
</script>

<style scope lang="scss">
.project-details-banner {
    background-image: url(../assets/projectDetailsBanner.jpg);
    height: 356px;
    margin-top: 100px;
}

.project-details {
    padding-top: 200px;
    width: 658px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    &__title {
        font-weight: 500;
        font-family: Open Sans;
        font-style: normal;
        font-size: 50px;
        color: #292f36;
    }

    &__text {
        font-family: Jost;
        font-style: normal;
        font-size: 22px;
        color: #4d5053;
    }

}

.slider {
    padding-top: 100px;
}
</style>