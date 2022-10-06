import React from "react";

import { Draggable, Droppable } from "react-beautiful-dnd";

const CategoryBody = ({ categoryIndex, category }) => {
  return (
    <Droppable
      droppableId={category.id.toString()}
      type="task"
      direction="vertical"
    >
      {(provided, snapshot) => (
        <div
          className="card-body p-4"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {/* タスク */}
          {category.tasks.map((task, taskIndex) => (
            <Draggable
              key={task.id}
              draggableId={task.id.toString()}
              index={taskIndex}
            >
              {(provided, snapshot) => (
                <h4
                  className="border p-3"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {task.name}
                </h4>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CategoryBody;
