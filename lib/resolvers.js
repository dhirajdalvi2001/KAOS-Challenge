// temporary in memory storage
// treat this as a way to store data from your mutations
// this array will be wiped out when this page reloads.
let todos = [];

const resolvers = {
  Query: {
    todos() {
      return todos;
    }
  },
  Mutation: {
    create_todo(_, { todo }) {
      todos = todos.concat(todo);
      return todo;
    }
  }
};

export default resolvers;
