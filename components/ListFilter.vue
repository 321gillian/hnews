<template>
  <nav
    class="flex md:justify-end md:w-full w-auto overflow-x-scroll md:overflow-hidden"
  >
    <button
      v-for="(item, index) in listOfFilters"
      :key="index"
      :class="[
        item === selectedFilter ? 'bg-orange-600' : 'bg-stone-700',
        index + 1 === listOfFilters.length ? 'mr-0' : 'mr-3',
      ]"
      class="text-white px-4 py-0.5 rounded-full capitalize hover:bg-orange-800 cursor-pointer"
      @click.prevent="$emit('set-filter', item)"
    >
      {{ item }}
    </button>
  </nav>
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
