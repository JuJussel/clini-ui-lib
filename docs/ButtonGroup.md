---
title: Button Group
parent: Components
has_children: false
nav_order: 1
---

# Button Group

Example
```
    <cui-button-group>
      <cui-button-group-item label="Button1" value="1"></cui-button-group-item>
      <cui-button-group-item label="Button2" value="2"></cui-button-group-item>
      <cui-button-group-item label="Button3" value="3"></cui-button-group-item>
      <cui-button-group-item label="Button4" value="4"></cui-button-group-item>
    </cui-button-group>
```
Props:

none

Button Group Item props:
- label: Text on Button
- icon: Icon to add in front of the text
- value: Value to be returned when clicked
- index: index of item. Will be emited on change