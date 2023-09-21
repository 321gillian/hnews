import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import ListFilter from "../../components/ListFilter.vue";

describe("ListFilter", async () => {
  const wrapper = mount(ListFilter, {
    props: {
      selectedFilter: "top",
    },
  });

  test("mount component", () => {
    const items = wrapper.findAll("h4");
    expect(items).toHaveLength(5);
    expect(items[0].text()).toEqual("top");
    expect(items[1].text()).toEqual("new");
    expect(items[2].text()).toEqual("ask");
    expect(items[3].text()).toEqual("show");
    expect(items[4].text()).toEqual("jobs");
  });

  test("emits 'set-filter' on list item click", async () => {
    const items = wrapper.findAll("h4");
    await items[0].trigger("click");
    expect(wrapper.emitted("set-filter")[0]).toContain("top");
  });
});
