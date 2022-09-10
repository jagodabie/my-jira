import { shallowMount } from "@vue/test-utils";
import Day from "@/components/Day.vue";

describe("Day.vue", () => {
  it("Render proper day of the week according to passed props", () => {
    const msg = "Monday";
    const wrapper = shallowMount(Day, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
