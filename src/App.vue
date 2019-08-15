<template>
  <div id="app">
    <div class="board__container">
      <BaseBoard id="boardOne"></BaseBoard>
    </div>
    <div class="board__container">
      <BaseBoard id="boardTwo">
        <BaseBlock v-for="(item, index) in blocks" :key="index" :id="item.meta.uuid" :item="item">
          <img :src="item.image_url" alt="alt name" />
          <p>{{item.name}}</p>
          <p>{{item.description}}</p>
        </BaseBlock>
      </BaseBoard>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BaseBoard from "./components/BaseBoard";
import BaseBlock from "./components/BaseBlock";
export default {
  components: {
    BaseBoard,
    BaseBlock
  },
  created() {
    try {
      this.fetchBlocks();
    } catch {
      console.error;
    }
  },
  methods: {
    ...mapActions({
      fetchBlocks: "fetchBlocks"
    })
  },
  computed: {
    ...mapState({
      blocks: state => state.blocks.items
    })
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  min-height: 100%;
  // height: 100%;
}
#app {
  display: flex;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.board {
  &__container {
    flex: 50%;
    display: flex;
    justify-content: center;
    background: #2c3e50;
  }
}
</style>
