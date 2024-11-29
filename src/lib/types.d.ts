interface TableData {
  fields: TableField[],
  shape: TableShape,
  data: TableDataRow[],
};

interface TableField {
  name: string,
  dtype: "String" | "Int32" | "Float32"
};

type TableShape = [number, number];

type TableDataRow = Record<string, any>;
