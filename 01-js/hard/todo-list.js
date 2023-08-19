/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(index) {
    if(index>=this.todoList.length) return;
    this.todoList.splice(index, 1);
  }
  update(index, todo) {
    if(index>=this.todoList.length) return;
    this.todoList.splice(index, 1, todo);
  }
  getAll() {
    return this.todoList;
  }
  get(index) {
    if(index>=this.todoList.length) return null;
    return this.todoList[index];
  }
  clear() {
    this.todoList = [];
  }
}

// const todo = new Todo();
// todo.add("Do Workout");
// todo.add("Do Brush");
// todo.add("Do Breakfast");
// todo.add("Do Homework");
// todo.update(1, "Drink Water");
// todo.clear();
// console.log(todo);

module.exports = Todo;

// Test Cases : All Passed