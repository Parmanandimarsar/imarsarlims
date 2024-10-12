
import * as XLSX from "xlsx";

export const ExportToExcel = (data, headers, fileName = "data.xlsx") => {
  // Prepare data for the Excel file
  const sheetData = [headers, ...data];

  // Create a new worksheet and workbook
  const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Trigger file download
  XLSX.writeFile(workbook, fileName);
};
