<template>
  <div class="todo">
    <h3>Lista de tarefas</h3>
    <InputText
      placeholder="What do you need to do?"
      type="text"
      v-model="newTask"
    />

    <Button icon="pi pi-plus" iconPos="center" @click="save" />
    <Button class="p-button-danger" label="Clear List" @click="clearToDo" />

    <div :key="index" class="task-list" v-for="(task, index) in tasks">
      <Checkbox :binary="true" :id="index" class="c" v-model="task.checked" />

      <label
        :class="[task.checked ? 'label-task-name-check' : 'label-task-name']"
      >
        {{ task.newTask }}
      </label>
      <Button icon="pi pi-pencil" @click="edit" />
      <Button
        class="p-button-danger"
        icon="pi pi-times"
        @click="clearTask(task)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",

  data() {
    return {
      newTask: "",
      editTask: "",
      tasks: [],
    };
  },

  methods: {
    save() {
      if (this.newTask !== "") {
        this.tasks.push({
          newTask: this.newTask,
          checked: false,
        });
        this.newTask = "";
      } else {
        alert("Insira uma tarefa!");
      }
    },
    clearToDo() {
      this.tasks = [];
    },
    clearTask(task) {
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    },
    edit() {
      this.tasks.put({
        newTask: this.editTask,
      });
    },
  },
};
</script>