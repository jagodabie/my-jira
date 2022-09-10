<template>
  <p>{{ task.name }}</p>
</template>

<script lang="ts">
import { Vue, Prop } from "vue-property-decorator";
import { Task } from "@/types/Task";

export default class TaskElement extends Vue {
  get myComputedProp() {
    return Math.random();
  }
  @Prop({ default: {} })
  task: Task;
  id: number;
}
</script>
<style scoped></style>
