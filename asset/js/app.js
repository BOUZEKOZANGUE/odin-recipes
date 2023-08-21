import { TodoList } from './TodoList.js';

const list = new TodoList();

// Références DOM
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const TODO_ANIM_CLASS = "todo-animate";

// Créer un élément todo
function createTodoElement(todo, index) {
  const todoEl = document.createElement('div');
  todoEl.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;

  const label = document.createElement('label');
  label.textContent = todo.text;

  todoEl.appendChild(checkbox);
  todoEl.appendChild(label);

  todoEl.addEventListener('click', () => {
    toggleCompleted(todo);
  });

  todoEl.addEventListener('click', () => {
    deleteTodo(index);
  });

  return todoEl;
}

// Définition des fonctions
function toggleCompleted(todo) {
  todo.completed = !todo.completed;
  list.updateTodo(todo);
  displayTodos();
}

// Afficher tous les todos
function displayTodos() {
  todoList.innerHTML = '';

  list.todos.forEach((todo, index) => {
    const todoEl = createTodoElement(todo, index);
    todoList.appendChild(todoEl);
  });
}

// Ajouter un todo
function addTodo() {
  try {
    const text = input.value.trim();
    if (text !== '') {
      const todo = { text: text, completed: false };
      list.addTodo(todo);
      const todoEl = createTodoElement(todo, list.todos.length - 1);
      todoEl.classList.add(TODO_ANIM_CLASS);
      todoList.appendChild(todoEl);
      setTimeout(() => {
        todoEl.classList.remove(TODO_ANIM_CLASS);
      }, 500);
      input.value = '';
    }
  } catch (err) {
    console.error(err);
  }
}

// Supprimer un todo
function deleteTodo(index) {
  list.deleteTodo(index);
  displayTodos();
}

// Écouteurs
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo();
});

displayTodos();