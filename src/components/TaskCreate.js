import React from "react";
import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task.js";

const TaskCreate = ({  task, taskFormUpdate,onUpdate }) => {
  const { createTask,editTaskById } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : ``);
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : ``);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    setTitle(``); //kaydettiktan sonra inputları boşaltıyorum
    setTaskDesc(``);
  };
  return (
    <div className="row">
      {taskFormUpdate ? (
        <>
          <div className="col-12 mb-2">
            <h6>Lütfen Taskı Güncelleyiniz</h6>
          </div>
          <div className="col-12">
            <form>
              <div className="mb-3">
                <label for="title" class="form-label">
                  Başlığı Güncelleyiniz:
                </label>
                <input
                  value={title}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="title"
                />
              </div>
              <div className="mb-3">
                <label for="description" className="form-label">
                  Taskı Güncelleyiniz:
                </label>
                <textarea
                  value={taskDesc}
                  onChange={handleTaskChange}
                  className="form-control"
                  id="description"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning text-white w-100"
                onClick={handleSubmit}
              >
                Güncelle
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="col-12 text-center">
            <h6 className="mt-3">Lütfen Task Giriniz</h6>
          </div>
          <div className="col-12 col-lg-4 offset-lg-4 card p-3">
            <form>
              <div className="mb-3">
                <label for="title" class="form-label">
                  Başlık:
                </label>
                <input
                  value={title}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  id="title"
                />
              </div>
              <div className="mb-3">
                <label for="description" className="form-label">
                  Task Giriniz:
                </label>
                <textarea
                  value={taskDesc}
                  onChange={handleTaskChange}
                  className="form-control"
                  id="description"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-success w-100"
                onClick={handleSubmit}
              >
                Oluştur
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCreate;
