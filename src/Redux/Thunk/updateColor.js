import { colorSelected } from "../Todo/action"; // Adjust this import as per your actual project structure

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
        method: "PATCH",
        body: JSON.stringify({ color: color }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      });

      if (res.status === 200) {
        const todo = await res.json();
        dispatch(colorSelected(todo.id, todo.color));
      } else {
        // Handle errors or non-200 status codes here
        console.error('Failed to update color for todo');
      }
    } catch (error) {
      // Handle network errors or other exceptions here
      console.error('Error:', error);
    }
  };
};

export default updateColor;
