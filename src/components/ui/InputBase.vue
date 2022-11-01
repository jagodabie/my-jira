<template>
  <div class="input-base-container">
    <label v-if="label" :class="{ labelRight: labelRight }">{{ label }} </label>
    <input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="handleInput($event)"
      :class="{ inputNumber: number }"
      :maxlength="maxLength"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class InputBase extends Vue {
  @Prop({ default: "" })
  public value!: string | number;
  @Prop({ default: "" })
  label!: string;
  @Prop({ default: "" })
  placeholder!: string;
  @Prop({ default: "text" })
  type!: string;
  @Prop({ default: false })
  number!: boolean;
  @Prop()
  maxLength!: number;
  @Prop({ default: false })
  labelRight!: boolean;
  public handleInput($event: Event) {
    let val = ($event.target as HTMLInputElement).value;
    this.$emit("input", val);
  }
}
</script>
<style scoped lang="scss">
input {
  width: 100%;
  height: 100%;
}
label {
  display: inline-block;
  text-align: left;
}
.inputNumber {
  width: 25px;
}
.labelRight {
  position: absolute;
  left: 2.5rem;
  width: 4rem;
}
.input-base-container {
  position: relative;
  width: 20%;
  margin: 1rem;
}
</style>
