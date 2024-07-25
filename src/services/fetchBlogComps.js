function fetchLastPost() {
    return {
        mainTitle: 'Последний пост',
        img: 'img/Image_last_post.png',
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        text: `С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности
                    для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры
                    импровизировали в работе над макетами, изображая текст при помощи волнистых линий.
                    С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более
                    реалистичный способ обозначения расположения текста на странице.`
    }

}


function fetchAllPosts(count = 10) {
    return [{
        title: 'Создадим лучший макет перепланировки',
        subtitle: '26 Декабрь,2022',
        image: '/img/blog_Image.png',
        button: '/img/Vector_blog.svg'
    }, {
        title: 'Лучшие интерьерные идеи по низкой цене',
        subtitle: '22 Декабрь,2022',
        image: '/img/blog_Image2.png',
        button: '/img/Vector_blog.svg'
    }, {
        title: 'Создадим лучший макет перепланировки',
        subtitle: '26 Декабрь,2022',
        image: '/img/blog_Image3.png',
        button: '/img/Vector_blog.svg'
    }, {
        title: 'Лучшие интерьерные решения для офисов',
        subtitle: '26 Декабрь,2022',
        image: '/img/blog_Image4.png',
        button: '/img/Vector_blog.svg'
    }, {
        title: 'Лучшие интерьерные идеи по низкой цене',
        subtitle: '22 Декабрь,2022',
        image: '/img/blog_Image5.png',
        button: '/img/Vector_blog.svg'
    }, {
        title: 'Лучшие интерьерные решения для офисов',
        subtitle: '25 Декабрь,2022',
        image: '/img/blog_Image6.png',
        button: '/img/Vector_blog.svg'
    }].slice(0, count)
}

export { fetchAllPosts, fetchLastPost };