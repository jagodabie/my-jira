<template>
  <label for="title"
    >{{ label }}
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="handleInput($event)"
  /></label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class InputBase extends Vue {
  @Prop({ default: "" })
  public value!: string | number;
  @Prop({ default: "" })
  label!: string;
  @Prop({ default: "placeholder" })
  placeholder!: string;
  @Prop({ default: "text" })
  type!: string;
  public handleInput($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    this.$emit("input", val);
  }
}
</script>
<style scoped lang="scss"></style>
