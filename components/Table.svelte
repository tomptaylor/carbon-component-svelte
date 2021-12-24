<script>
  import { DataTable } from "carbon-components-svelte";

  const headers = [{ key: "id", value: "ID" }, { key: "name", value: "Name" }];

  const rows = [
    { id: 0, name: "Jane" },
    { id: 1, name: "John" },
    { id: 2, name: "" },
    { id: 3, name: "Steve" },
    { id: 4, name: null },
    { id: 5, name: "Stephanie" },
    { id: 6, name: undefined }
  ];
</script>

<DataTable {headers} {rows} title="Wrong types">
  <span slot="cell" let:cell>
    {#if cell.value === null}
      <span style="color:red">[NULL]</span>
    {:else if cell.value === undefined}
      <span style="color:orange">[UNDEFINED]</span>
    {:else if cell.value === ''}
      <span style="color:yellow">[EMPTY]</span>
    {:else}
      {cell.value}
    {/if}
  </span>
</DataTable>

<DataTable {headers} {rows} title="Workaround">
  <span slot="cell" let:cell let:row>
    {#if row[cell.key] === null}
      <span style="color:red">[NULL]</span>
    {:else if row[cell.key] === undefined}
      <span style="color:orange">[UNDEFINED]</span>
    {:else if row[cell.key] === ''}
      <span style="color:yellow">[EMPTY]</span>
    {:else}
      {row[cell.key]}
    {/if}
  </span>
</DataTable>