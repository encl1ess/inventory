<template>
    <div class="grid">
        <div v-for="index in 25" :value="index-1" class="grid__cell" @drop="onDrop($event, index -1)" @dragover.prevent
            @dragenter.prevent @click.prevent="showModal">
            <item draggable="true" v-if="getItem(index-1)" :item="getItem(index-1)"
                @dragstart="startDrag($event, getItem(index-1))" />
        </div>
        <modal-card v-model:show="isVisible" :add="isAdd" :item="currentItem" />
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import Item from './Item.vue';
import ModalCard from './ModalCard.vue';

export default {
    name: 'grid',
    components: {
        Item,
        ModalCard
    },
    data() {
        return {
            currentItem: {},
            isVisible: false,
            isAdd: true,
        }
    },
    methods: {
        startDrag(e, item) {
            e.dataTransfer.dropEffect = 'move'
            e.dataTransfer.effectAllowed = 'move'
            this.currentItem = e.dataTransfer.setData('itemId', item.id)
        },
        onDrop(e, cell) {
            if (!event.currentTarget.children.length) {
                const itemID = e.dataTransfer.getData('itemID')
                const item = this.items.find((item) => item.id == itemID);
                item.cellId = cell;
                this.setItems(this.updateItem(this.items, item.id, item.cellId))
            }
        },
        showModal(event) {
            this.currentCell = +event.currentTarget.getAttribute('value');
            if (event.currentTarget.children.length) {
                const cell = this.currentCell;
                this.currentItem = this.getItem(cell);
                this.isAdd = false;

            } else {
                this.currentItem = {
                    id: this.items.length,
                    quantity: 1,
                    cellId: this.currentCell,
                    color: this.getColor(),
                }
                this.isAdd = true;
            }
            this.isVisible = true;
        },
        getColor() {
            const colors = ['yellow', 'green', 'purple']
            const rand = Math.floor(Math.random() * colors.length);
            return colors[rand];
        },
        updateItem(state, id, cell) {
            const index = state.indexOf(elem => elem.itemId == id );
            return state.map(elem => elem.itemId === id ? elem.cellId = cell : elem)
        },
        ...mapMutations({
            setItems: 'items/setItems'
        }),

    },
    computed: {
        ...mapState({
            items: state => state.items.items

        }),
        ...mapGetters({
            getItem: 'items/getItem'
        }),
    }

}
</script>

<style lang="scss" scoped>
.grid {
    color: white;
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;

    &__cell {
        height: 100%;
        border-top: 1px solid #4D4D4D;

        &:not(:nth-child(5n)) {
            border-right: 1px solid #4D4D4D;
        }

        &:nth-child(-n+5) {
            border-top: none;
        }


    }
}
</style>