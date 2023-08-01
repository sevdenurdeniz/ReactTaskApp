import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/task.js";

function TaskShow({ task }) {
  const { editTaskById, deleteTaskById } = useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    deleteTaskById(task.id)
  };
  const hadleEdit = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  };
  return (
    <div className="col-12 col-lg-4 my-3 text-center">
      <div className="card p-3">
        {showEdit ? (
          <>
          
            <TaskCreate
              task={task}
              taskFormUpdate={true}
              onUpdate = {handleSubmit}

            />
          </>
        ) : (
          <>
            <h4>{task.title}</h4>
            <p>{task.taskDesc}</p>
            <div className="row">
              <div className="col-12 butons">
                <button className="btn btn-danger" onClick={handleDelete}>
                  Sil
                </button>

                <button
                  className="btn btn-warning text-white"
                  onClick={hadleEdit}
                >
                  Güncelle
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskShow;
