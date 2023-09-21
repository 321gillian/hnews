<template>
  <div class="flex justify-end w-full">
    <h4
      v-for="(item, index) in listOfFilters"
      :key="index"
      :class="item === selectedFilter ? 'bg-orange-600' : 'bg-stone-700'"
      class="text-white px-4 py-0.5 rounded-full mr-3 capitalize hover:bg-orange-800 cursor-pointer"
      @click.prevent="$emit('set-filter', item)"
    >
      {{ item }}
    </h4>
  </div>
</template>
<script>
export default {
  props: {
    selectedFilter: {
      type: String,
      required: true,
    },
  },
  emits: ["set-filter"],
  setup() {
    const listOfFilters = ["top", "new", "ask", "show", "jobs"];

    return {
      listOfFilters,
    };
  },
};
</script>
