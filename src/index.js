import { crearTodoHtml, saludar } from './js/componentes.js';
import './styles.css';
import { TodoList, Todo } from './classes';




export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHtml(todo));