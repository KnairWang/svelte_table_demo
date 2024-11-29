<script lang="ts">
  import type { PageData } from "./$types";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";

  let { data }: { data: PageData } = $props();

  let tableData: TableDatas = $state({ fields: [], shape: [0, 0], data: [] });

  let add = async () => {
    const response = await fetch("./api/test", {
      method: "GET",
    });

    tableData = await response.json();
  };
</script>

<div>
  <button onclick={add}>demo data</button>
</div>

<div>
  <Table>
    <TableHead>
      {#each tableData.fields as field}
        <TableHeadCell>
          <div>{field.name}</div>
          <div>{field.dtype}</div>
        </TableHeadCell>
      {/each}
    </TableHead>
    <TableBody>
      {#each { length: tableData.shape[1] } as _, row}
        <TableBodyRow>
          {#each { length: tableData.shape[0] } as _, column}
            <TableBodyCell>
              {tableData.data[row][tableData.fields[column].name]}
            </TableBodyCell>
          {/each}
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</div>
