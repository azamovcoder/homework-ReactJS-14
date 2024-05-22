import "./todolist.scss";

import React, { memo } from "react";

const TodosCreate = ({ updateTodos, formData, getValue, createTodos }) => {
  const handleCreateTodos = (e) => {
    e.preventDefault();
    if (formData.id) {
      // update
      updateTodos(formData);
    } else {
      // create
      let date = new Date();
      formData.id = date.getTime();
      formData.time = `${date.getHours()}:${date.getMinutes()}`;
      createTodos(formData);
    }
  };
  return (
    <form className="create__form" onSubmit={handleCreateTodos}>
      <h2>TodosCreate</h2>
      <div className="create__form__input">
        <label htmlFor="">Title</label>
        <input
          required
          value={formData.title}
          onChange={(e) => getValue({ title: e.target.value })}
          type="text"
        />
      </div>
      <div className="create__form__input">
        <label htmlFor="">Text</label>
        <input
          required
          value={formData.text}
          onChange={(e) => getValue({ text: e.target.value })}
          type="text"
        />
      </div>
      <div className="create__form__input">
        <label htmlFor="">Status</label>
        <select
          required
          value={formData.status}
          onChange={(e) => getValue({ status: e.target.value })}
        >
          <option value="" selected disabled hidden></option>
          <option value="important">Important</option>
          <option value="average">Average</option>
          <option value="not important">Not Important</option>
        </select>
      </div>

      <button>{formData.id ? "save" : "create"}</button>
    </form>
  );
};

export default memo(TodosCreate);
