import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'; 

//1. Imports the React and useState modules from the react package. 
// The useState hook is a built-in function provided by React that allows us to manage state in our components.
//2. The function App() { ... } defines a new React component called App.
// The component is a function that returns a React element, which is what we see rendered on the screen.
//3. The useState hook is used to create two state variables: tasks and inputValue. 
//tasks is an array that will hold our to-do list items, and inputValue is a string that will hold the current value 
//of the input field.
//4. The handleInputChange function is a callback function that is called whenever the user types something into the input field. 
//It takes the event object as a parameter and updates the inputValue state variable with the new value entered by the user.
//5. The handleAddTask function is called when the user clicks the "Add" button. 
//It checks to see if the inputValue is not empty and adds the new task to the tasks array using the setTasks function. 
//Finally, it clears the input field by setting the inputValue to an empty string.
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

// 6. The return statement defines the React element that will be rendered on the screen. 
//It contains a div element that contains a h1 element, a ul element that will display the list of tasks. 
//The tasks.map function is used to render each task item as an li element with a unique key. 
//The key attribute is necessary for React to efficiently render the list of tasks.

// 7. The input element allows the user to enter new tasks. 
//It is a controlled component, meaning that its value is controlled by the inputValue state variable. 
//The onChange event handler is called whenever the user types something into the input field, 
//and it updates the inputValue state variable.

// 8. The button element is used to add new tasks to the to-do list. When the user clicks the button, 
//the handleAddTask function is called, which adds the new task to the tasks array and clears the input field by 
//setting the inputValue to an empty string.
  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default App;

