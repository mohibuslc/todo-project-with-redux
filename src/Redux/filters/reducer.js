 import { COLORCHANGED, STATUSCHANGE } from "./actionType";
import initialState from "./initialState"; // Fixed the typo here

const reducer = (state= initialState,  action) => {
    
  switch (action.type) {
    case STATUSCHANGE:
      return {
        ...state,
        status: action.payload,
      };

      case COLORCHANGED:
        const { color, changeType } = action.payload;
        switch (changeType) {
          case 'added':
            return {
              ...state,
              colors: [...state.colors, color],
            };
      
          case 'removed':
            return {
              ...state,
              colors: state.colors.filter(todoColor=> todoColor !== color),
            };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer ; 
