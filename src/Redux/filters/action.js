import { STATUSCHANGE, COLORCHANGED } from "./actionType";

export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,

    payload: {
      color: color,
      changeType: changeType,
    },
  };
};

export const statusChange = (status) => {
  return {
    type: STATUSCHANGE,

    payload: status,
  };
};
