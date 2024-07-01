<template>
    <div>
        <div v-for="item in categories" :key="item" @click="onCategoryClick(item)">
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
        }
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
        this.selectedCategory = this.categories[0]
    },
}
</script>


<style></style>