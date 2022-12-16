<template>
    <section class="card">
        <img class="card__img" src="@/assets/aside-image.png">
        <div class="card__body">
            <h4 class="card__title text title"></h4>
            <p class="card__text text"></p>
            <p class="card__text text"></p>
            <p class="card__text text"></p>
            <p class="card__text text"></p>
            <p class="card__text text"></p>

        </div>
        <footer class="card__footer text"></footer>

    </section>
</template>

<script>
export default {
    name: 'card',
}
</script>

<style lang="scss">
.text {
    background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    border-radius: 4px;
    height: 10px;
    width: 100%;
    margin: 0.6rem 0;
}
.title {
    height: 26px;
    border-radius: 8px;
}

.card {
    width: 100%;
    min-width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #262626;
    border: 1px solid #4D4D4D;
    border-radius: 12px;
    max-width: 236px;
    height: inherit;

    &__img {
        align-self: center;
        margin: 1rem 0 0.5rem;
        width: 208px;
        height: 240px;
        backdrop-filter: blur(6px);
        border-radius: 8px;
    }

    &__title {
        max-width: 190px;
    }

    &__footer {
        width: 80px;
        margin: 1rem 0;
    }

    p {
       
        &:first-of-type {
            width: 155px;
        }

        &:nth-of-type(3) {
            width: 170px;
        }

        &:nth-of-type(4) {
            width: 160px;
        }

        &:nth-of-type(5) {
            width: 140px;
        }
    }

    &__body {
        overflow-y: auto;
        width: 80%;
        min-width: max-content;
        // height: max-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}
</style>