---
title: Datepicker
parent: Components
has_children: false
nav_order: 1
---

# Datepicker

Example
```
    <cui-datepicker label="Date" v-model="date"></cui-datepicker>

```
Props:

- placeholder: Placeholder text
- format: Date display format
- valueFormat: Date value format
- label: Select label
- range: Select Data range. Returns array
- type: set to "time" for timepicker
- timePickerOptions: options for time picker (if type is time)

Emits:

- change: Value selected. Emits selected date
