import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ }) => {
  let fields = [
    { name: "column1", dtype: "String" },
    { name: "column2", dtype: "Int32" },
    { name: "column3", dtype: "Float32" },
    { name: "column4", dtype: "String" },
  ]
  let shape = [5, 4];
  let data = [
    { column1: "asdf", column2: 1, column3: 2.45, column4: "3.14" },
    { column1: "qwer", column2: 6, column3: 2.45, column4: "3.14" },
    { column1: "zxcv", column2: 0, column3: 2.45, column4: "3.14" },
    { column1: "lklk", column2: -1, column3: 2.45, column4: "3.14" },
    { column1: "poiuoiuoi", column2: 1000, column3: 2.45, column4: "3.14" },
  ];

  return new Response(String(JSON.stringify({
    fields, shape, data
  })));
};
