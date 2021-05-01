---
title: Card
parent: Components
has_children: false
nav_order: 1
---

# Card

Has 2 slots - header,footer.
Will be 100% of parent element.

Example
```
      <cui-card>
        <template v-slot:header>
          <h2>患者一覧</h2>
        </template>
        <div>Body</div>
        <template v-slot:footer>
          <h2>Footer</h2>
        </template>
      </cui-card>

```

Props:
- noPadding: Body will have no padding