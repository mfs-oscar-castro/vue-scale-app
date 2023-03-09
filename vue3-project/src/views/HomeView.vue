<template>
  <div class="home">
    <ItemListComponent :items="items"></ItemListComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemListComponent from '@/components/item/ItemList.component.vue';
import { ItemInterface } from '@/models/items/Item.interface'

export default defineComponent({
  name: 'Home',
  components: {
    ItemListComponent
  },
  setup(){
    const items: ItemInterface[] = [{
      id: 1,
      name: 'Item 1',
      selected: false
    }, {
      id: 2,
      name: 'Item 2',
      selected: false
    }, {
      id: 3,
      name: 'Item 3',
      selected: false
    }]

    return {
      items
    }
  }
});
</script>