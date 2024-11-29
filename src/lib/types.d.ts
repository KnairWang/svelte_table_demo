interface TableDatas {
  fields: TableField[],
  shape: TableShape,
  data: TableData[],
};

interface TableField {
  name: string,
  dtype: "String" | "Int32" | "Float32"
};

type TableShape = [number, number];

type TableData = Record<string, any>;
