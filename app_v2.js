var user = 'jinyoung'
var todoStorage = {
	fetch: function(){
		var todos = JSON.parse(
			localStorage.getItem(user) || '[]'
		)
		return todos
	},
	save: function(todos){
		localStorage.setItem(user, JSON.stringify(todos))
	}
}

const app = new Vue({
    el: '#app',
    data: {
		title: 'Vue.js With You!!!',
		newTodo: '',
		todos: [],
	},
    methods: {
		addTodo: function(){
			this.todos.push({
				title: this.newTodo,
				done: false,
			});
			this.newTodo = '';
		},
		removeTodo: function(todo) {
			const todoIdx = this.todos.indexOf(todo);
			this.todos.splice(todoIdx, 1);
		},
		allDone: function(){
			this.todos.forEach((todo) => {
				todo.done = true;
			});
		},
	},
	watch: {
		todos:{
			handler: function(todos) {
				todoStorage.save(todos)
			},
			deep: true
		}
	},
	created() {
		this.todos = todoStorage.fetch()
	},
});
