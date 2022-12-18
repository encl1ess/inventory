<template>
    <div class="search">
        <input class="search__input text" type="text" />
        <img class="cross-icon" src="@/assets/icons/cross.svg" />

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search {
    margin: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 785px;
    height: 72px;
    background: #262626;
    border: 1px solid #4D4D4D;
    border-radius: 12px;

    &__input {
        width: 80%;
        height: 36px;
        border: none;
        border-radius: 12px;
        margin: 3em;
    }
    .cross-icon {
        margin: 1rem;
        align-self: flex-start;
    }
}
</style>