import React from "react";
import { Box } from "@mui/material";
import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import DataGridTable from "../DataGridTable";
import { LabTestMappingMasterColumns } from "../../TableField/TablefieldsColumns";

const DraggableDataGrid = ({ rows,columns, setRows ,handleCheckboxChange,handleRemoveRow}) => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setRows((items) => {
        items.findIndex((item)=>console.log("item",item));
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
// console.log("5555setrow",rows);

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <SortableContext
        items={rows.map((row) => row.id)}
        strategy={verticalListSortingStrategy}
      >
        <Box mt={2} height={300}>
          <DataGridTable
            rows={rows}
            columns={columns}
            disableSelectionOnClick
          />
        </Box>
        
      </SortableContext>
    </DndContext>
  );
};

export default DraggableDataGrid;
