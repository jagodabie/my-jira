<template>
  <div class="form-container">
    <br />
    <Form />
  </div>
</template>

<script lang="ts">
import Form from "@/components/ui/Form.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    Form,
  },
})
export default class TasksView extends Vue {}
</script>
<style scoped lang="scss"></style>
