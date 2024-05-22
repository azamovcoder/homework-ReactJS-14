import "./todolist.scss";

import React, { memo, useMemo } from "react";

const TodosManage = ({ data, deleteTodos, updateValus }) => {
  console.log(data);

  let total = useMemo(() => {
    return data.length;
  }, []);
  let todosItems = data?.map((el) => (
    <div className="form__list">
      <ul key={el.id}>
        <li>{el.title}</li>
        <li>{el.text}</li>
        <li>{el.status}</li>
        <li>{el.time}</li>
      </ul>

      <div className="">
        <button className="edit__btn btn" onClick={() => updateValus(el)}>
          edit
        </button>
        <button className="delete__btn btn" onClick={() => deleteTodos(el.id)}>
          delete
        </button>
      </div>
    </div>
  ));
  return (
    <div>
      <ul className="top__list">
        <li>Title</li>
        <li>Text</li>
        <li>Status</li>
        <li>Time</li>
        <li>Buttons</li>
      </ul>
      <ul>{todosItems}</ul>
    </div>
  );
};

export default memo(TodosManage);

let initialState = {
  id: null,
  title: "uchrashuv",
  text: "laylo gul",
  status: "juda muhim", // ["muhim", "shart emas", ]
  time: "",
};
