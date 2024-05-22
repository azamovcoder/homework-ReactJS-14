import React, { memo } from "react";

import TodoApp from "./components/todo-list/TodoApp";

// import Parent from './components/main/Main'

const App = () => {
  return (
    <div>
      <div className="container">
        <TodoApp />
      </div>
    </div>
  );
};

export default memo(App);
