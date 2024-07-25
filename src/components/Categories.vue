<template>
    <div class="categories container">
        <div class="categories__btn" v-for="item in categories" :key="item" @click="onCategoryClick(item)"
            v-bind:class="{ 'categories__btn_selected': selectedCategory === item }">
            {{ item }}
        </div>
    </div>
</template>




<script>
export default {
    name: 'Categories',
    props: {
        categories: {
            type: Array,
            default: () => [],
        },

    },
    data() {
        return {
            selectedCategory: ' ',
        }
    },
    methods: {
        onCategoryClick(name) {
            if (this.selectedCategory !== name) {
                this.$emit('changeCategory', name);
                this.selectedCategory = name
            }
        }
    },
    created() {
        this.selectedCategory = this.categories[1]
    },
}
</script>


<style scoped lang="scss">
.categories {
    margin-top: 250px;
    width: 799px;
    display: flex;

    border: 1px solid #cda274;
    border-radius: 18px;

    &__btn {
        height: 75px;
        padding: 26px 66px;
        border-radius: 18px;

        &:hover,
        &_selected {
            background-color: #cda274;
            color: #fff;
        }
    }
}
</style>