import { describe, expect, test, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ListItem from "../../components/ListItem.vue";

const testData = {
  by: "dhouston",
  kids: [8934, 8876],
  score: 111,
  title: "My YC app: Dropbox - Throw away your USB drive",
};

describe("ListItem", async () => {
  global.fetch = vi.fn();

  fetch.mockResolvedValue({
    json: () => new Promise((resolve) => resolve(testData)),
  });

  const wrapper = shallowMount(ListItem, {
    props: {
      storyId: 8863,
    },
  });

  test("mount component", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find("h3").text()).toEqual(testData.title);
  });
});
