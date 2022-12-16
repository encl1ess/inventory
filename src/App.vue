<template>
  <div class="flex-container flex-container_column">
    <div class="flex-container">
      <aside>
        <card />
      </aside>
    </div>
    
  </div>



</template>

<script>
import Card from './components/Card.vue';

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #262626;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

aside {
  width: 30%;
  max-width: 236px;
  height: 500px;
}

.flex-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &_column{
    flex-direction: column;
  }

}


</style>
