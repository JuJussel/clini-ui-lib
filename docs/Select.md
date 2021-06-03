---
title: Select
parent: Components
has_children: false
nav_order: 1
---

# Select

If multiple is true, value MUST be object!

Example
```
    <cui-select 
        label="Select"
        :data="data"
        prop="name"
        :loading="loading"
        v-model="selectData"
        color="var(--cui-dark)"
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

Slots:
- dropdownItem: Dorpdown item content. nod needed.
```
    <template v-slot:dropdownItem="{ item }">
        <span style="margin-right: 40px">{ item.id }</span>
        <span>{ item.name }</span>
    </template>

```




```
Props:

- search: shows input field when focused. Emits search value.
- multiple: Select multiple values and show as tag in select
- label: Select label
- required: Required text will be displayed
- data: data for dropdown list. Array
- placeholder: Empty text
- displayValueProp: key of object to display when selected. Only needed when data is Object
- returnValueProp: key to return if Object. If not set, Object will be returned
- loading: Shows loading in dropdown
- color: Background color while not focused. Text color will cahnge to white.
- disabled: Disabled state
- noNote: REmove bottom dive for not (To better align vertically if not needed)

Emits:

- select: Value selected. Emits selected items
- input: input into search field. Emits search value