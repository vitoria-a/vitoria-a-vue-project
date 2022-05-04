<template>
  <div class="todo">
    <h3>Lista de tarefas</h3>
    <InputText type="text" v-model="value" />

    <Button icon="pi pi-plus" iconPos="center" @click="toSave()" />
    <Button class="p-button-danger" label="Clear List" @click="clearList()" />

    <div class="task-list" v-for="(task, index) in tasks" :key="index">
      <Checkbox :id="index" :binary="true" v-model="task.checked" />
      <label class="label-task-name">{{ task.value }}</label>
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
.task-list {
  justify-content: start;
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 400px;
  margin-left: 37%;
}
.p-button {
  margin-left: 10px;
}
.label-task-name {
  margin-left: 10px;
}

.p-checkbox {
}
</style>