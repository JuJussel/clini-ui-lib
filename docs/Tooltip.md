---
title: Tooltip
parent: Components
has_children: false
nav_order: 1
---

# Tooltip

Example
```
  <cui-tooltip style="margin-left: 5px">
      <cui-button />
      <template #tooltip>
          <div> Notification </div>
      </template>
  </cui-tooltip>

```
Slots:
- default: Content of tooltip

Props:
- position: Position of tooltip as per Popper.js