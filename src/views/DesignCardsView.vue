<template>

</template>


<script>

export default {
    name: 'DesignCardsView',
    data() {
        return {
            categories: ['Ванная комната', 'Спальня', 'Кухня', 'Гостиная'],
            Cards: []
        }
    },
    methods: {
        fetchData() {
            return [
                {
                    image: '',
                    title: '',
                    subtitle: '',
                    url: '',
                    favourite: false,

                }
            ]
        }
    },
    created() {
        this.Cards = this.fetchData()
    }
}

</script>


<style></style>