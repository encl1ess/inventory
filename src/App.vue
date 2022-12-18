<template>
  <div class="flex-container flex-container_column">
    <div class="content-wrapper flex-container">
      <aside>
        <card />
      </aside>
      <div class="inventory">
        <grid />
      </div>
    </div>
    <search/>
  </div>



</template>

<script>
import Card from '@/components/Card.vue';
import Grid from '@/components/Grid.vue';
import Search from '@/components/Search.vue';
import store from './store';
export default {
  components: {
    Card,
    Grid,
    Search
  },
  beforeMount() {
		store.commit('items/initialiseStore');
	}

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #262626;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: url('@/assets/icons/arrow-cursor.svg'), auto;

}

.content-wrapper {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

aside {
  width: 30%;
  max-width: 236px;
  height: inherit;
}

.flex-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &_column {
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }

}

.inventory {
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  width: 67%;
  height: 100%;
  max-width: 525px;
  min-width: 300px;
  overflow: hidden;
  position: relative;
}
</style>
