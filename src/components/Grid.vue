<template>
       
    <div class="grid"  >
        <div v-for="index in 25" :value="index - 1" class="grid__cell" @drop="onDrop($event, index - 1)" 
        @dragover="onDragOver"  
        @click="showModal"
            >
            <item draggable="true" v-if="getItem(index - 1)" :item="getItem(index - 1)"
                @dragstart="onDragStart($event, getItem(index - 1))" 
                @dragend="onDragEnd"
                @drag="onDrag"
                />
        </div>
        <modal-card v-model:show="isVisible" :add="isAdd" :item="currentItem" />
        <div  @dragover.prevent v-show="isDrag" class="draggable-item" :style="dragStyle" ref="draggableItem"></div>
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
            draggableItem: null,
            x: null,
            y: null,
            isDrag: false,
        }
    },
    methods: {
        onDragOver(event) {
            event.preventDefault();
        },
        onDragStart(event, item) {
            event.dataTransfer.effectAllowed = "move";
            let img = new Image();
            img.src = require('@/assets/icons/grab-cursor.svg');
            event.dataTransfer.setDragImage(img, img.width/2, img.height/2);
            this.x= event.offsetX + event.target.offsetLeft - 2*event.target.offsetWidth/3;
            this.y= event.offsetY + event.target.offsetTop -  2*event.target.offsetHeight/3;
            this.isDrag = true;
            this.currentItem = event.dataTransfer.setData('itemId', item.id);
            this.draggableItem = event.currentTarget.cloneNode(true);
            this.$refs["draggableItem"].appendChild(this.draggableItem);
            event.currentTarget.style.opacity=0;
        },
        onDragEnd(event) {
            this.draggableItem.remove();
            this.draggableItem = null; 
            event.target.style.opacity="1"
        },
        onDrop(event, cell) {
            this.isDrag = false;
            if (!event.currentTarget.children.length) {
                const itemID = event.dataTransfer.getData('itemID')
                const item = this.items.find((item) => item.id == itemID);
                item.cellId = cell;
                this.setItems(this.updateItem(this.items, item.id, item.cellId))
            }
        },
        onDrag(event) {
            this.x= event.offsetX + event.target.offsetLeft - 2*event.target.offsetWidth/3;
            this.y= event.offsetY + event.target.offsetTop -  2*event.target.offsetHeight/3;
        },
        showModal(event) {
            this.currentCell = +event.currentTarget.getAttribute('value');
            if (event.currentTarget.children.length) {
                const cell = this.currentCell;
                this.currentItem = this.getItem(cell);
                this.isAdd = false;

            } else {
                this.currentItem = {
                    id: new Date(),
                    quantity: 1,
                    cellId: this.currentCell,
                    color: this.getColor(),
                }
                this.isAdd = true;
            }
            this.isVisible = true;
        },
        getColor() {
            const colors = ['yellow', 'green', 'purple', 'red']
            let rand = Math.floor(Math.random() * colors.length);
            return colors[rand];
        },
        updateItem(state, id, cell) {
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
        dragStyle() {
            return {
                top: `${this.y}px`,
                left: `${this.x}px`
            };
        }
    }

}
</script>

<style lang="scss">
.draggable-item {
    position: absolute;
    pointer-events: none;
    cursor: url('@/assets/icons/grab-cursor.svg'), move;
    
     .item {
        pointer-events: none;
        position: absolute;
        align-items: center;
        justify-content: center;
        background: #262626;
        border: 1px solid #4D4D4D;
        border-radius: 24px;
        width: 105px;
        height: 100px;
       
        &__quantity {
            display: none;
        }
        
    } 
}

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