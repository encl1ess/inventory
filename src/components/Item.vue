<template>
    <div class="item">
        <div class="item__icon">
            <div class="wrapper" :class="item.color">
                <div class="item__square item__square-back"></div>
                <div class="item__square item__square-front"></div>
            </div>

        </div>
        <div class="item__quantity">{{ item.quantity }}</div>
    </div>
</template>

<script>
export default {
    name: 'item',
    props: {
        item: Object
    }

}
</script>

<style lang="scss">
.green {
    div:first-child {
        background: #7FAA65;
    }

    div:last-child {
        background: rgba(184, 217, 152, 0.35);
    }
}

.yellow {
    div:first-child {
        background: #AA9765;
    }

    div:last-child {
        background: rgba(217, 187, 152, 0.35);
    }
}

.purple {
    div:first-child {
        background: #656CAA;
    }

    div:last-child {
        background: rgba(116, 129, 237, 0.35);
    }
}

.item {
    width: 100%;
    height: 100px;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    &__icon {
        .wrapper {
            width: 54px;
            height: 54px;
            position: relative;
        }

    }

    &__square {
        position: absolute;
        width: 48px;
        height: 48px;


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

    &__quantity {
        align-self: flex-end;
        justify-self: flex-end;
        font-family: 'Inter';
        font-weight: 500;
        line-height: 1.5em;
        font-size: 10px;
        background: #262626;
        border: 1px solid #4D4D4D;
        border-top-left-radius: 6px;
        width: 16px;
        height: 16px;
        color: #FFFFFF;
        opacity: 0.4;
        margin-top: 0.5rem;
    }


}
</style>