<template>
  <div class="home">
    <ItemListComponent
        :items="items"
        :loading="loading"
        @selectItem="onSelectItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import ItemListComponent from '@/components/item/ItemList.component.vue';
import { ItemInterface } from '@/models/items/Item.interface';
import store from '@/store';

export default defineComponent({
  name: 'Home',
  components: {
    ItemListComponent
  },
  setup(){
    const items = computed(() => {
      return store.state.items;
    });

    const loading = computed(() => {
      return store.state.loading;
    });

    onMounted(() => {
      store.dispatch('loadItems')
    });

    const onSelectItem = (item: ItemInterface) => {
      store.dispatch('selectItem', {
        id: item.id,
        selected: !item.selected
      });
    }

    return {
      items,
      loading,
      onSelectItem
    }
  }
});
</script>