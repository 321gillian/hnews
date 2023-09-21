<template>
  <div
    class="ListItem mb-3 border-2 p-5 border-dashed border-black-80 flex items-center"
  >
    <Icon
      name="material-symbols:arrow-circle-up"
      color="#ff6600"
      size="2.2em"
      class="mr-5 cursor-pointer"
    ></Icon>
    <a :href="storyData.url" class="flex justify-between w-full items-center">
      <h3 class="text-m">{{ storyData.title }}</h3>
      <div class="text-right">
        <p class="text-sm">Posted by {{ storyData.by }}</p>
        <p class="text-sm">Score: {{ storyData.score }}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    storyId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const storyURL = `https://hacker-news.firebaseio.com/v0/item/${props.storyId}.json?print=pretty`;
    const storyData = ref({});

    function getStory() {
      return fetch(storyURL)
        .then((res) => res.json())
        .then((story) => (storyData.value = story));
    }

    getStory();

    return {
      storyData,
    };
  },
};
</script>
