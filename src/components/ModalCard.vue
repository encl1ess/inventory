<template>
    <transition name="show">
        <section class="modal card" v-if="show">
            <header class="card__header">
                <div class="cross-icon" @click.stop="closeModal">
                    <img  src="@/assets/icons/cross.svg" />
                </div>
                <div class="wrapper" :class="item.color">
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
                <custom-button class="red large" @click="() => removeItem(this.item)">Удалить
                    предмет</custom-button>
                <div v-if="add" class="input-wrapper">
                    <input class="quantity-input" :style="error ? { border: '1px solid red' } : { border: '1px solid #4D4D4D' }"
                        type="number" @input="quantity = +$event.target.value; error = false;"
                        placeholder="Введите количество" />
                    <div class="button-wrapper">
                        <custom-button class="white" @click="show = false">Отмена</custom-button>
                        <custom-button class="red" @click="addItem">Подтвердить</custom-button>
                    </div>
                </div>
            </footer>
        </section>
    </transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import CustomButton from './ui/CustomButton.vue';
export default {
    name: 'modal-card',
    components: {
        CustomButton
    },
    props: {
        item: {
            type: Object
        },
        show: {
            type: Boolean,
            default: false
        },
        add: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            quantity: 0,
            error: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('update:show', false)
        },
        addItem() {
            if (this.quantity > 0) {
                this.error = false;
                this.item.quantity = this.quantity;
                this.quantity = 0;
                // this.items.push(this.item);
                this.setItems([...this.items, this.item])
                this.$emit('update:show', false);

            } else {
                this.error = true;
            }

        },
        removeItem(item) {
            this.setItems(this.items.filter(i => i.id !== item.id))
            this.$emit('update:show', false);
        },

        ...mapMutations({
            setItems: 'items/setItems',
            remove: 'items/removeItem'
        }),


    },
    computed: {
        ...mapState({
            items: state => state.items.items
        })
    }

}
</script>

<style lang="scss" scoped>
.show-enter-active,
.show-leave-active {
    transition: right 0.4s ease-in-out;
}

.show-enter-from,
.show-leave-to {
    right: -250px !important;
}

.modal {
    position: absolute;

    top: 0;
    right: 0;
    width: 250px;
    height: inherit;
    background: rgba(38, 38, 38, 0.5);
    backdrop-filter: blur(8px);
    border: none;
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
            padding: 1em;
            cursor: pointer;
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

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                /* <-- Apparently some margin are still there even though it's hidden */
            }

            -webkit-appearance: none;
            appearance: none;
            border-radius: 4px;
            margin: 0.5rem 0;
            height: 40px;
            width: 78%;
            background: transparent;
            font-family: 'Inter';
            color: #FFFFFF;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            padding-left: 1em;
        }

        .button-wrapper {
            width: 85%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.3em;
        }
    }


}
</style>