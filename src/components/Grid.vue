<template>
    <div class="grid">
        <div v-for="index in 25" :key="index" class="grid__cell" 
        @drop="onDrop($event, index-1)" 
        @dragover.prevent
        @dragenter.prevent
        @click="showModal">
            <item draggable="true" v-if="getItem(index - 1)" :item="getItem(index - 1)"
                @dragstart="startDrag($event, getItem(index - 1))" />
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Item from './Item.vue';
export default {
    name: 'grid',
    components: {
        Item
    },
    data() {
        return {
            currentItem: {},
            currentCell: 0
        }
    },
    methods: {
        startDrag(e, item) {
            e.dataTransfer.dropEffect = 'move'
            e.dataTransfer.effectAllowed = 'move'
            this.currentItem = e.dataTransfer.setData('itemId', item.id)
        },
        onDrop(e, cell) {
            const itemID = e.dataTransfer.getData('itemID')
            const item = this.items.find((item) => item.id == itemID)
            item.cellId = cell
            console.log(this.items)
        },
        showModal(event) {
            this.currentCell = event.target.key;
            
        }

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