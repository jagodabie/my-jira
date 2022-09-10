<template>
  <div class="hours">
    <div class="hour" v-for="(hour, index) in hours" :key="index">
      {{ hour }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Hours extends Vue {
  @Prop({ default: [] })
  hours!: number[];
}
</script>
<style scoped>
.hour {
  font-size: 2px;
  padding: 20px;
  border-bottom: 0.1px solid rgb(175, 168, 168);
}
</style>
