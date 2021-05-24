---
title: Table
parent: Components
has_children: false
nav_order: 1
---

# Table

Needs Th and Td and data.
Pass data in cui-table and add th in thead slot, td in tbody slot

Example
```

      tableData: [
        {name: 'Peter', age: '36', perf: 'Awesome', ok: true},
        {name: 'Paul', age: '22', perf: 'Soso', ok: true, selected: false},
        {name: 'Eri', age: '34', perf: 'Good', ok: true},
        {name: 'Guy', age: '54', perf: 'Awesome', ok: false},
        {name: 'Kathi', age: '41', perf: 'Ok', ok: false}
      ]

      <cui-table :data="tableData">
        <template #header>
          <h2>The Table</h2>
        </template>
        <template #thead>
          <cui-th sort="name">Name</cui-th>
          <cui-th sort="age">Age</cui-th>
          <cui-th>Performance</cui-th>
          <cui-th>Is OK</cui-th>
          <cui-th></cui-th>
        </template>
        <template v-slot:row="{ row }">
            <td> { row.name } </td>
            <td> { row.age } </td>
            <td> { row.perf } </td>
            <td> { row.ok } </td>
            <td><cui-button label="delete" @click.stop=""/></td>
        </template>
        <template v-slot:expand="{ expand }">
          <div> { expand.name } </div>
        </template>
        <!-- <template #footer>
          This table has stuff
        </template> -->
      </cui-table>

```

Slots:
- header: Table heading
- thead: Teable head. Use cui-th here
- row: Content of row. Add td here. Use "row" to access data
- expand: Content of expandable row. Use "expand" to access data
- footer: Table footer
- emptyImage: Image for empty state


Props:
- striped: Adds stripes. Does not work with expand
- singleSelect: Select single row. Emits selected row
- multipleSelect: Select multiple rows. Emits row selected and all selected rows
- clickable: Adds clickable class (pointer)
- loading: Set loading state

Th properties:
- sort: if set, sort by prop used.