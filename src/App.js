import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CategoryBody from "./CategoryBody";
import { dummyData } from "./dummyData";

function App() {
  console.log(dummyData);
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        {dummyData.map((board, boardIndex) => (
          <div className="card" key={board.id}>
            <h2 className="card-header ">{board.name}</h2>
            {/* カテゴリー */}
            <Droppable
              droppableId={board.id.toString()}
              type="category"
              direction="horizontal"
            >
              {(provided, categorySnapshot) => (
                <div
                  className="card-body d-flex overflow-auto"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {board.categories.map((category, categoryIndex) => (
                    <Draggable
                      key={category.id}
                      draggableId={category.id.toString()}
                      index={categoryIndex}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="card"
                          key={category.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h3 className="card-header">{category.name}</h3>
                          <CategoryBody
                            categoryIndex={categoryIndex}
                            category={category}
                          />
                        </div>
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
    </DragDropContext>
  );
}

export default App;
