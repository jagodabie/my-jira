<template>
  <li :key="item.id" :id="`li-${item.id}`">
    <span>{{ item.title }}</span
    ><span @click="$emit('openModal')">+</span>
  </li>
</template>

<script lang="ts">
import { Task } from "@/types/Task";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class InputBase extends Vue {
  @Prop({ default: {} })
  public item!: Task;
}
</script>
<style scoped lang="scss">
li {
  padding: 1rem 3rem;
  border: $border-gray;
  font-size: 14px;
  font-weight: bold;
  color: $bg-gray44;
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 1rem;
}
</style>
