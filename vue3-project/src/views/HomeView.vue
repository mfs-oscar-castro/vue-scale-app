<template>
  <div class="home">
    <ItemListComponent :items="items"></ItemListComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemListComponent from "@/components/item/ItemList.component.vue";

export default defineComponent({
  name: 'Home',
  components: {
    ItemListComponent
  },
  setup(){
    const items: any[] = [{
      id: 1,
      name: 'Item 1'
    }, {
      id: 2,
      name: 'Item 2'
    }, {
      id: 3,
      name: 'Item 3'
    }]

    return {
      items
    }
  }
});
</script>