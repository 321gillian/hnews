<template>
  <section
    class="ListItem mb-3 border-2 px-5 py-4 border-dashed border-black-80 flex items-center"
  >
    <template v-if="storyData.title">
      <Icon
        name="material-symbols:arrow-circle-up"
        :class="{ 'ListItem__icon--clicked': clicked }"
        class="mr-5 cursor-pointer ListItem__icon"
        @click="clicked = true"
      ></Icon>
      <a
        :href="storyData.url"
        class="flex justify-between w-full items-center md:flex-row flex-col"
        :alt="storyData.title"
      >
        <div class="flex flex-col w-full">
          <h3 class="text-m">{{ storyData.title }}</h3>
          <p class="text-sm text-zinc-500">{{ storyData.score }} points</p>
        </div>
        <div class="md:text-right w-full">
          <p class="text-sm">Posted by {{ storyData.by }}</p>
          <p v-if="getSource(storyData.url)" class="text-xs text-zinc-500">
            {{ getSource(storyData.url) }}
          </p>
        </div>
      </a>
    </template>
    <p v-else class="w-full text-center">Loading...</p>
  </section>
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
    const clicked = ref(false);

    function getStory() {
      return fetch(storyURL)
        .then((res) => res.json())
        .then((story) => (storyData.value = story));
    }

    function getSource(url) {
      if (url === undefined) return "";
      const removeFirstPart = url.split("//")[1];
      const removeLastPart = removeFirstPart.toString().split("/")[0];
      return removeLastPart;
    }

    getStory();

    return {
      storyData,
      getSource,
      clicked,
    };
  },
};
</script>
<style lang="scss" scoped>
.ListItem__icon {
  color: rgb(113 113 122);
  height: 2.2em;
  width: 2.2em;

  @media only screen and (max-width: 600px) {
    height: 4.4em;
    width: 4.4em;
  }

  &--clicked,
  &:hover,
  &:active {
    color: rgb(234 88 12);
  }

  &--clicked {
    @media only screen and (min-width: 600px) {
      border: 1px solid rgb(251 146 60);
      border-radius: 50%;
      box-sizing: border-box;
    }
  }
}
</style>
