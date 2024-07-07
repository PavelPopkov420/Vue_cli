<template>
    <div>
        <img :src="require('../assets/' + itemData.name)" alt="projectImg">
    </div>
</template>


<script>

export default {
    name: 'SliderItem',
    props: {
        itemData: {
            type: Object,
            default: () => { }
        }

    },
    data() {
        return {

        }
    },
}

</script>


<style></style>