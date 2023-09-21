import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import TheFooter from "../../components/TheFooter.vue";

describe("TheFooter", async () => {
  const wrapper = mount(TheFooter);

  test("mount component", () => {
    expect(wrapper.text()).toContain("FAQ");
    expect(wrapper.text()).toContain("API");
    expect(wrapper.text()).toContain("Legal");
    expect(wrapper.text()).toContain("Contact");
    expect(wrapper.text()).toContain("Careers");
  });
});
