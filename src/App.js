import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { dummyData } from "./dummyData";

function App() {
  console.log(dummyData);
  const onDragEnd = () => {};
  return (
    <div className="container">
      <DragDropContext onDragEnd={onDragEnd}>
        {dummyData.map((board, boardIndex) => (
          <div className="card" key={board.id}>
            <h2 className="card-header ">{board.name}</h2>
            <div className="card-body d-flex overflow-auto">
              {/* カテゴリー */}
              {board.categories.map((category, categoryIndex) => (
                <div className="card" key={category.id}>
                  <h3 className="card-header">{category.name}</h3>
                  <Droppable droppableId={categoryIndex.toString()} type="task">
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
