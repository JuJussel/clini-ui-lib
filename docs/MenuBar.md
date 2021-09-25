---
title: Menu Bar
parent: Components
has_children: false
nav_order: 1
---

# Menu Bar

Has 3 slots - left,center,right.
Use "cui-menu-bar-item" to add menu buttons.
Slots can have any other kind of content.
On menu item click "cui-menu-bar" will emit value of clicked item.

Props:

- value: Selected value

Example
```
    <cui-menu-bar :value="menu" @change="changeMenu">
      <template v-slot:left>
        <cui-menu-bar-item icon="fa fa-home menu-icon" value="1" />
        <cui-menu-bar-item icon="fas fa-user-clock" label="受付" value="reception"/>
        <cui-menu-bar-item icon="fa fa-home menu-icon" label="患者" value="2"/>
        <cui-menu-bar-item icon="fa fa-home menu-icon" label="医療" />
      </template>
      <template v-slot:center>CliniClean</template>
      <template v-slot:right>
        <cui-avatar :image="'https://localhost/files/user4.png?1'"></cui-avatar>
        <cui-menu-bar-item icon="fas fa-sign-out-alt" />
      </template>
    </cui-menu-bar>

    changeMenu(value) {
      this.menu = value
    },


```
# Menu Bar item

Props:
- label: Text displayed
- icon: icon displayed
- value: Value emited when clicked

Emits:
- change: Selection changed. Returns value prop of item