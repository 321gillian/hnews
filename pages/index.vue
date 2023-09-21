<template>
  <main>
    <div class="lg:mx-24 md:mx-12 mx-4">
      <ListFilter
        class="mb-4 text-right"
        :selected-filter="filter"
        @set-filter="setFilter"
      ></ListFilter>
    </div>

    <ListItem
      v-for="id in currentPagesStories"
      :key="id"
      :story-id="parseInt(id)"
      class="lg:mx-24 md:mx-12 mx-4"
    ></ListItem>
    <div class="w-full flex pt-4 pb-20">
      <button
        class="rounded-none bg-zinc-900 text-white px-5 py-2 mx-auto hover:bg-orange-800"
      >
        More stories...
      </button>
    </div>
  </main>
</template>
<script>
import { ref, watch, computed } from "vue";

export default {
  setup() {
    let filter = ref("top");
    let listUrl = computed(
      () =>
        `https://hacker-news.firebaseio.com/v0/${filter.value}stories.json?print=pretty`
    );

    let storyIds = ref([]);
    let currentPagesStories = ref([]);

    async function getHackerNewsItems() {
      const res = await fetch(listUrl.value);
      const resIds = await res.json();
      if (resIds.length > 0) storyIds.value = [...resIds];
      currentPagesStories.value = [...storyIds.value.slice(0, 25)];
    }

    getHackerNewsItems();

    function setFilter(val) {
      filter.value = val === "jobs" ? "job" : val;
    }

    watch(filter, async (newVal) => {
      console.log(newVal);
      await getHackerNewsItems();
    });

    return {
      storyIds,
      currentPagesStories,
      setFilter,
      filter,
    };
  },
};
</script>
