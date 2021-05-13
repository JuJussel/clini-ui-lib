---
title: Select
parent: Components
has_children: false
nav_order: 1
---

# Select

Example
```
    <cui-select 
        label="Select"
        :data="data"
        prop="name"
        :loading="loading"
        v-model="selectData"
        multiple
        >
    </cui-select>

    data: [
        {name: 'Peter', age: '36', perf: 'Awesome', ok: true, selected: false},
        {name: 'Paul', age: '22', perf: 'Soso', ok: true, selected: false},
        {name: 'Eri', age: '34', perf: 'Good', ok: true, selected: false},
        {name: 'Guy', age: '54', perf: 'Awesome', ok: false, selected: false},
        {name: 'Kathi', age: '41', perf: 'Ok', ok: false, selected: false}
    ],


```
Props:

- search: shows input field when focused. Emits search value.
- multiple: Select multiple values and show as tag in select
- label: Select label
- required: Required text will be displayed
- data: data for dropdown list. Array
- placeholder: Empty text
- prop: key of object to display when selected. Only needed when data is Object
- loading: Shows loading in dropdown

Emits:

- select: Value selected. Emits selected items
- input: input into search field. Emits search value