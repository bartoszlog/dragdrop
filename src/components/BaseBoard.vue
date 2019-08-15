<template>
  <ul :id="id" class="board" @dragover.prevent @drop.prevent="drop">
    <slot />
  </ul>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  data() {
    return {
      selectedItemsIds: [],
      selectedItems: []
    };
  },
  props: ["id"],
  methods: {
    drop(e) {
      const target = e.target;
      const blockId = e.dataTransfer.getData("blockId");

      const block = document.getElementById(blockId);
      const clonedBlock = block.cloneNode(true);

      if (this.selectedItemsIds.includes(blockId)) {
        target.appendChild(block);
      } else {
        const item = JSON.parse(e.dataTransfer.getData("item"));
        const newId = uuid.v1();

        item.meta["source_uuid"] = item.meta.uuid;
        item.meta.uuid = newId;

        clonedBlock.setAttribute("id", newId);
        target.appendChild(clonedBlock);

        clonedBlock.ondragstart = e => {
          const target = e.target;
          e.dataTransfer.setData("blockId", target.id);
        };
        this.selectedItemsIds.push(clonedBlock.getAttribute("id"));
        this.selectedItems.push(item);
        console.log(this.selectedItems);
      }
    }
  }
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0;
  list-style: none;
  background: aliceblue;
}
</style>