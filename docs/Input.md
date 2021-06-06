---
title: Input
parent: Components
has_children: false
nav_order: 1
---

# Input

Example
```
<cui-input v-model="input" label="名前" required icon="fas fa-sign-out-alt" append="kg"></cui-input>
<cui-input v-model="input" disabled></cui-input>

```
Props:

- type: HTML Input type (text, number, password,...)
- label: Label of Input shown above. If empty will not be rendered
- required: Will all "Required" to labelrequired
- icon: Icon to prepend. 
- width: Width of input. Default is 100%
- disabled: Disable input and make read only
- append: Text to append
- darker: for table headers. makes input darker