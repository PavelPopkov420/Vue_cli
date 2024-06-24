<template>
        <div class="footer_items container">
            <div class="footer_items__logos">
                <a class="footer_items__logos__link" href="#">
                    <img class="footer_items__logos__link__img" src="../assets/Logo.png" alt="logo">
                </a>
                <div class="footer_items__logos__social">
                    <a href="#" class="footer__items__logs__logo__social__link"><img src="../assets/x.svg" alt="link_logo" class="footer__items__logs__logo__social__link__img"></a>
                    <a href="#" class="footer__items__logs__logo__social__link"><img src="../assets/link.svg" alt="link_logo" class="footer__items__logs__logo__social__link__img"></a>
                </div>
            </div>
            <div class="footer_items__pages">
                <h3 class="footer_items__pages__title">Страницы</h3>
                <ul class="footer_items__pages__items">
                    <li class="footer_items__pages__items__links"><a class="footer_items__pages__items__links" href="#">Домой</a></li>
                    <li class="footer_items__pages__items__links"><a class="footer_items__pages__items__links" href="#">Проект</a></li>
                    <li class="footer_items__pages__items__links"><a class="footer_items__pages__items__links" href="#">Блог</a></li>
                </ul>

            </div>

            <div class="footer_items__contact">
                <h3 class="footer_items__contact__title">Контакты</h3>
                <p class="footer_items__contact__items">55 East Birchwood Ave.,<br> Brooklyn, New York 11201</p>
                <p class="footer_items__contact__items">contact@interno.com</p>
                <p class="footer_items__contact__items">(123) 456 - 7890</p>
            </div>
        </div>
</template>

<script> 
export default {
name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer_items {
    height: 406px;
    margin-top: 100px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;

    &__logos {
        max-width: 393px;
        display: flex;
        flex-direction: column;
        gap: 31px;

        &__link {

            &__img {
                width: 177px;
                height: 50px;
            }
        }

        &__social {
            display: flex;
            justify-content: space-between;
            max-width: 90px;
        }
    }
    &__pages {

        display: flex;
        flex-direction: column;
        gap: 20px;

        &__title {
            font-weight: 500;
            font-family: Open Sans;
            font-style: normal;
            font-size: 25px;
            color: #292f36;
        }

        &__items {
            list-style: none;

            &__links {
                margin-bottom: 30px;
                font-family: Jost;
                font-style: normal;
                font-size: 22px;
                color: #4d5053;
            }
        }
    }
    &__contact {
        display: flex;
        flex-direction: column;
        gap: 40px;

        &__title {
            font-weight: 500;
            font-family: Open Sans;
            font-style: normal;
            font-size: 25px;
            color: #292f36;
        }

        &__items {
            margin-bottom: 30px;
            font-family: Jost;
            font-style: normal;
            font-size: 22px;
            color: #4d5053;
            word-break: break-all;
        }
    }
}


  
  </style>