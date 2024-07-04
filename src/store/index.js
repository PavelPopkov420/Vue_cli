import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Минималистичные спальни',
        textOne: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. ',
        textTwo: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...».'
    },
    getters: {
        getTitle: (state) => state.title,
        getTextOne: (state) => state.textOne,
        getTextTwo: (state) => state.textTwo
    },


    mutations: {},
    actions: {},
    modules: {}
})