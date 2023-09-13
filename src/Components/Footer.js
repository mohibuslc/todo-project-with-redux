import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChange } from "../Redux/filters/action";

export default function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todoRemaining = todos.filter((todo) => !todo.completed).length;
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;

  const noTaskLeft = (noTaskLeft) => {
    switch (noTaskLeft) {
      case 0:
        return "No Tasks Left";

      case 1:
        return "1 Task Left";

      default:
        return `${noTaskLeft} Tasks`;
    }
  };

  const handleStatusChange = (status) => {
    dispatch(statusChange(status));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{noTaskLeft(todoRemaining)}</p>

      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "ALL" && "font-bold"}`}
          
          onClick={() => handleStatusChange("ALL")}
        >
          All
        </li>
        <li>|</li>

        <li
          className={`cursor-pointer ${status === "Incomplete" &&"font-bold"}`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>

        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
        
        
        ></li>
        <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
        
        ></li>
        <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
}
