---
title: Textarea
parent: Components
has_children: false
nav_order: 1
---

# Textarea

Example
```
<cui-textarea v-model="textarea" label="名前" rows="5" />
<cui-textarea v-model="textarea" disabled></cui-textarea>

```
Props:

- label: Label of Input shown above. If empty will not be rendered
- required: Will all "Required" to labelrequired
- disabled: Disable input and make read only
- darker: for table headers. makes input darker
- note: Error message
- rows: Number of Rows
- cols: Number of Cols