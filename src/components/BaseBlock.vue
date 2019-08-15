<template>
  <li class="block" :id="id" draggable="true" @dragover.stop @dragstart="dragstart">
    <slot />
  </li>
</template>

<script>
import { setTimeout } from "timers";
export default {
  props: ["item", "id"],
  methods: {
    dragstart(e) {
      const target = e.target;
      e.dataTransfer.setData("blockId", target.id);
      e.dataTransfer.setData("item", JSON.stringify(this.item));
    }
  }
};
</script>

<style scoped>
.block {
  margin: 5px 15px;
  background: rgb(78, 37, 37);
  color: white;
}
</style>