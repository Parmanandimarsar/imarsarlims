import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const DraggableRow = ({ row }) => {
  const {attributes,listeners,setNodeRef,transform,transition,isDragging,} = useSortable({id: row.id,});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grabbing" : "grab", // Set cursor style for dragging
    opacity: isDragging ? 1 : 1, // Optional: Reduce opacity while dragging for effect
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {row.name}
    </div>
  );
};

export default DraggableRow;
