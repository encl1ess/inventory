<template>
    <section class="modal card" v-if="show">
        <header class="card__header">
            <img class="cross-icon" src="@/assets/icons/cross.svg" />
            <div class="wrapper green">
                <div class="modal__square modal__square-back"></div>
                <div class="modal__square modal__square-front"></div>
            </div>
        </header>
        <hr />
        <div class="card__body">
            <h4 class="card__title  text title"></h4>
            <p class="card__text text"></p>
            <p class="card__text text"></p>
            <p class="card__text text"></p>
            <p class="card__text text"></p>
            <p class="card__text text"></p>

        </div>
        <hr />
        <footer class="modal__footer">
            <custom-button v-if="delete" class="red large">Удалить предмет</custom-button>
            <div v-else class="input-wrapper">
                <input class="quantity-input" type="number" placeholder="Введите количество" />
                <div class="button-wrapper">
                    <custom-button class="white">Отмена</custom-button>
                    <custom-button class="red">Подтвердить</custom-button>
                </div>
            </div>
        </footer>

    </section>
</template>

<script>
import CustomButton from './ui/CustomButton.vue';
export default {
    name: 'modal-card',
    components: {
        CustomButton
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        delete: {
            type: Boolean,
            default: false
        }
    },
    methods: {

    }

}
</script>

<style lang="scss" scoped>
.modal {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    height: inherit;
    background: rgba(38, 38, 38, 0.5);
    backdrop-filter: blur(8px);
    border-left: 1px solid #4D4D4D;
    border-radius: 0;

    hr {
        width: 220px;
        height: 1px;
        border: none;
        background: #4D4D4D;
        margin: 0.5rem 0 0.5rem;
    }

    p {
        &:nth-child(-n+4) {
            width: 100%;
        }

        &:last-child {
            width: 40%;
        }
    }

    .card__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 215px;
        .cross-icon {
            align-self: flex-end;
            margin: 1em;
        }

        .wrapper {
            margin-top: 0.7em;
            position: relative;
            width: 130px;
            height: 130px;
        }
    }

    &__square {
        position: absolute;
        width: 116px;
        height: 116px;


        &-back {
            left: 0;
            bottom: 0;

        }

        &-front {
            right: 0;
            top: 0;
            backdrop-filter: blur(6px);
        }
    }


    .modal__footer {
        width: 85%;
    }
    .input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 133px;
        width: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
        background: rgba(38, 38, 38, 0.6);
        border-top: 1px solid #4D4D4D;
        backdrop-filter: blur(8px);

        .quantity-input {
            border-radius: 4px;
            margin: 0.5rem 0;
            height: 40px;
            width: 85%;
            background: transparent;
            font-family: 'Inter';
            font-weight: 500;
            font-size: 14px;
            opacity: 0.4;
            line-height: 17px;
            border: 1px solid #4D4D4D;

            &::placeholder {
                padding-left: 1em;
            }
        }

        .button-wrapper {
            width: 85%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1em;
        }
    }


}
</style>