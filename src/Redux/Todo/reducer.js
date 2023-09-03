import {
  ADDED,
  ALLCOMPLELETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionType";
import initialState from "./initialState";

const nextMaxId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextMaxId(state),
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,

          completed: !todo.completed,
        };
      });

      case DELETED:
        return state.filter((todo) => todo.id !== action.payload);
      
    case ALLCOMPLELETED:

      return state.map(todo => {

        return {
          ...todo,
          completed: true,
        };
      });
      
    case CLEARCOMPLETED:
      const { todoId, color } = action.payload;

      return state.filter((todo) => !todo.completed);

    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    default:
      return state;
  }
};

export default reducer;
