
import {  ADDED,TOGGLED,COLORSELECTED,DELETED, CLEARCOMPLETED , COMPLETEDALL, LOADED} from "./actionType";
  
  
export const added = (todoText) => {
  return {
    type:ADDED,
    payload: todoText,
  };
};
export const loaded = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  }
};
  
  
  export const toggled = (todoId) => {
    return {
      type: TOGGLED,
      payload: todoId,
    };
  };
  
  export const colorSelected = (todoId, color) => {
    return {
      type: COLORSELECTED,
      payload: {
        todoId:todoId,
        color:color, 
      },
    };
  };
  
  export const deleted = (todoId) => {
    return {
      type: DELETED,
      payload: todoId,
    };
  };
  
  export const completedAll=()=> {
    return {
      type:COMPLETEDALL,
    };
  };
  
  export const clearCompleted = () => {
    return {
      type: CLEARCOMPLETED,
    };
  };
  