---
title: Modal
parent: Components
has_children: false
nav_order: 1
---

# Modal

Example
```
    <cui-modal :visible="visible" @close="handleClose">
      <cui-card style="width: 400px; height: 300px">
        <template #header>Header</template>
          Hello
        </cui-card>
    </cui-modal>

```

Props:
- visible: If to show the modal
- closable: If treu, can close by clicking outside of the modal

Emits
- Close: Modal closed