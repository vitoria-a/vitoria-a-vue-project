<template>
  <div class="todo">
    <h3>Lista de tarefas</h3>
    <InputText type="text" v-model="value" />

    <Button class="m-3" icon="pi pi-plus" iconPos="center" @click="toSave()" />
    <Button class="p-button-danger" label="Clear List" @click="clearList()" />

    <div v-for="(task, index) in tasks" :key="index">
      <Checkbox class="m-2" :id="index" :binary="true" v-model="task.checked" />
      <label class="m-3" :for="index">{{ task.value }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",

  data: function () {
    return {
      value: "",
      tasks: [],
      checked: false,
    };
  },

  methods: {
    toSave() {
      this.tasks.push({
        value: this.value,
        checked: false,
      });
      this.value = "";
    },
    clearList() {
      //Setting taskList to an empty array clears the whole list
      this.tasks = [];
    },
  },
};
</script>

<style scoped>
.m-3 {
  margin-left: 10px;
  margin-right: 10px;
}

.m-2 {
  margin-top: 10px;
}
</style>