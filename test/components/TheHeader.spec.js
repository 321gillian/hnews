import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import TheHeader from "../../components/TheHeader.vue";

describe("TheHeader", async () => {
  const wrapper = mount(TheHeader);

  test("mount component", () => {
    expect(wrapper.text()).toContain("Hacker News");
    expect(wrapper.text()).toContain("Login");
  });
});
