<template>
    <button class="custom-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'custom-button'
}
</script>

<style lang="scss" scoped>
.red {
    color: white;
    background: #FA7272;
    &:hover {
        background: #FF8888;
    }
}

.white {
    color: #2D2D2D;
    background: #FFFFFF;
}

.large {
    height: 39px;
    width: 100%;
}

.custom-button {
    min-width: fit-content;
    padding: 0.5em 1.1rem;
    height: 33px;
    font-family: 'SF Pro Display';
    font-size: 14px;
    line-height: 17px;
    border: none;
    border-radius: 8px;
    &:hover {
        cursor: url('@/assets/icons/arrow-cursor.svg'), auto;
    }
}
</style>