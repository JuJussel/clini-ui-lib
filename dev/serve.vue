<script>
import { defineComponent } from "vue";
import CuiAvatar from "../src/lib-components/cui-avatar/cui-avatar.vue";
import cuiFileUpload from "../src/lib-components/cui-file-upload/cui-file-upload.vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { CliniUiLibSample } from '@/entry.esm';

export default defineComponent({
    components: { cuiFileUpload },
    name: "ServeDev",
    data() {
        CuiAvatar;
        return {
            textareaval: "ee",
            treeNodes: [
                {
                    name: "Images",
                    icon: "fa-solid fa-plane-lock",
                    children: [{ name: "Legolas" }, { name: "Legolas" }],
                },
                {
                    name: "Documents",
                    children: [
                        {
                            name: "Gloin son of Groin",
                            children: [{ name: "Gimli son of Gloin" }],
                        },
                        {
                            name: "Gloin son of Groin",
                            children: [{ name: "Gimli son of Gloin" }],
                        },
                    ],
                },
            ],

            editorMenuItems: [
                {
                    icon: "fas fa-redo-alt",
                    title: "Redo",
                    action: () => alert("RRRR"),
                },
            ],
            switch: false,
            visible: false,
            input: "Hello",
            tableData: [
                {
                    name: "Peter",
                    age: "36",
                    perf: "Awesome",
                    type: "01",
                    selected: false,
                },
                {
                    name: "Paul",
                    age: "22",
                    perf: "Soso",
                    type: "02",
                    selected: false,
                },
                {
                    name: "Eri",
                    age: "34",
                    perf: "Good",
                    type: 2,
                    selected: false,
                },
                {
                    name: "Guy",
                    age: "54",
                    perf: "Awesome",
                    1: false,
                    selected: false,
                },
                {
                    name: "Kathi",
                    age: "41",
                    perf: "type",
                    2: false,
                    selected: false,
                },
            ],
            tableData2: ["Value1", "Value2", "Value3"],
            selectReturnData: 3,
            loading: false,
            tableLoading: false,
            check: false,
            check2: false,
            date: { start: "", end: "" },
            menu: "reception",
            noteA: "",
            activeMenu: "4",
            selectData: [
                { id: "01", name: "診察" },
                { id: "02", name: "薬のみ" },
                { id: "03", name: "注射のみ" },
                { id: "04", name: "検査のみ" },
            ],
            selectData2: ["A", "B", "C"],
            radio: "2",
        };
    },
    methods: {
        treeClick(item, index) {
        },
        disabledFunct(row) {
            return true;
        },
        handleClose() {
            this.visible = false;
        },
        changeMenu(value) {
            this.menu = value;
        },
        search() {
            this.loading = true;
            setTimeout(
                function () {
                    this.selectData = this.tableData;
                    this.loading = false;
                }.bind(this),
                1000
            );
        },
        showPop() {
            this.$cui.notification({
                title: "Yeah",
                text: "You did it!",
                color: "primary",
            });
        },
    },
});
</script>

<template>
    <div id="app" style="position: relative">
        <cui-side-bar position="right" noButton ref="sideBar">
            <div>Test</div>
        </cui-side-bar>

        <cui-menu-bar :value="menu" @change="changeMenu">
            <template v-slot:left>
                <cui-menu-bar-item icon="fa fa-home menu-icon" value="1" />
                <cui-menu-bar-item
                    icon="fas fa-user-clock"
                    label="受付"
                    value="reception"
                />
                <cui-menu-bar-item
                    icon="fa fa-home menu-icon"
                    label="患者"
                    value="2"
                />
                <cui-menu-bar-item icon="fa fa-home menu-icon" label="医療" />
            </template>
            <template v-slot:center>CliniClean</template>
            <template v-slot:right>
                <cui-avatar
                    :image="'https://localhost/files/user4.png?1'"
                ></cui-avatar>
                <cui-menu-bar-item
                    icon="fas fa-sign-out-alt"
                    @click="$refs.sideBar.toggle()"
                />
            </template>
        </cui-menu-bar>
        <cui-badge visible>
            <i class="fas fa-bell"></i>
        </cui-badge>

        <cui-tree :nodes="treeNodes" style="width: 400px" @select="treeClick">
            <template v-slot:title
                ><i class="fa-solid fa-door-closed"></i>
                Title
            </template>
            <template v-slot:item="{ item }">
                <sapn style="display: flex">
                    <span>{{ item.name }}</span>
                    <a label="test">ddd</a>
                </sapn>
            </template>
        </cui-tree>

        <cui-button-group v-model="activeMenu">
            <cui-button-group-item
                icon="fas fa-sign-out-alt"
                label="Button1"
                value="1"
            ></cui-button-group-item>
            <cui-button-group-item
                label="Button2"
                value="2"
            ></cui-button-group-item>
            <cui-button-group-item
                label="Button3"
                value="3"
            ></cui-button-group-item>
            <cui-button-group-item
                label="Button4"
                value="4"
            ></cui-button-group-item>
        </cui-button-group>
        <cui-card style="height: 900px">
            <cui-table
                outline
                :data="tableData"
                singleSelect
                :loading="tableLoading"
                :disabledFunct="disabledFunct"
                style="height: 300px; width: 350px; margin: 40px"
            >
                <template #header>
                    <h2>The Table</h2>
                </template>
                <template #thead>
                    <cui-th sort="name">Name</cui-th>
                    <cui-th sort="age">Age</cui-th>
                    <cui-th sort="name">Performance</cui-th>
                </template>
                <template v-slot:row="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.type }}</td>
                    <td>
                        <cui-tag primary> Content </cui-tag>
                    </td>
                </template>
            </cui-table>
        </cui-card>

        <cui-card style="height: 500px; width: 600px">
            <cui-editor
                style="height: 100%"
                :customMenuItems="editorMenuItems"
            ></cui-editor>
        </cui-card>
        <div style="height: 400px; width: 600px">
            <cui-card>
                <template v-slot:header>
                    <h2>患者一覧</h2>
                    <cui-tooltip position="bottom" onHover :hoverDelay="400">
                        <a>TOOLTIP</a>
                        <template #tooltip>ABC</template>
                    </cui-tooltip>
                </template>
                <div>
                    {{ textareaval }}
                    <cui-textarea v-model="textareaval"></cui-textarea>
                    <cui-switch
                        v-model="switch"
                        trueLabel="Yes"
                        falseLabel="No"
                        label="test"
                    ></cui-switch>
                    <cui-file-upload></cui-file-upload>

                    <cui-radio
                        caption="caption"
                        label="女性"
                        value="1"
                        v-model="radio"
                    />
                    <cui-radio label="2" value="2" v-model="radio" disabled />
                    <cui-radio label="3" value="3" v-model="radio" />
                    <cui-button
                        label="3333"
                        disabled
                    ></cui-button>
                    <cui-datepicker
                        label="Date"
                        v-model="date"
                    ></cui-datepicker>

                    <div style="margin-top: 100px"></div>

                    <cui-input
                        :note="noteA"
                        v-model="input"
                        label="名前"
                        required
                        icon="fas fa-sign-out-alt"
                        append="kg"
                    ></cui-input>
                    <cui-input v-model="input" disabled></cui-input>

                    <div>{{ input }}</div>
                    <div>{{ check }}</div>
                    <cui-checkbox v-model="check" label="Check"></cui-checkbox>
                    <cui-checkbox
                        v-model="check2"
                        label="Check2"
                    ></cui-checkbox>

                    {{ selectReturnData }}
                    <cui-select
                        label="Select"
                        :data="selectData"
                        displayValueProp="name"
                        returnValueProp="id"
                        :loading="loading"
                        v-model="selectReturnData"
                        color="var(--cui-dark)"
                        search
                    >
                        <template v-slot:dropdownItem="{ item }">
                            <span>{{ item.name }}</span>
                        </template>
                    </cui-select>
                </div>
                <cui-button @click="showPop" label="Show" />
                <template v-slot:footer>
                    <h2>Footer</h2>
                </template>
            </cui-card>
        </div>
        <cui-card style="height: 500px" noPadding>
            <cui-table
                :data="tableData"
                singleSelect
                :loading="tableLoading"
                :disabledFunct="disabledFunct"
            >
                <template #header>
                    <h2>The Table</h2>
                    <cui-input darker></cui-input>
                </template>
                <template #thead>
                    <cui-th sort="name">Name</cui-th>
                    <cui-th sort="age">Age</cui-th>
                    <cui-th sort="name">Performance</cui-th>
                    <cui-th sort="name">Is OK</cui-th>
                    <cui-th sort="name"></cui-th>
                </template>
                <template v-slot:row="{ row }">
                    <td>{{ row.name }}</td>
                    <td>{{ row.type }}</td>
                    <td>
                        <cui-select
                            label="Select"
                            :data="selectData"
                            displayValueProp="name"
                            returnValueProp="id"
                            :loading="loading"
                            v-model="row.type"
                            color="var(--cui-dark)"
                        >
                        </cui-select>
                    </td>
                    <td>
                        <cui-tag primary> Content </cui-tag>
                    </td>
                    <td><cui-button label="delete" @click.stop="" /></td>
                </template>
            </cui-table>
        </cui-card>

        <cui-modal :visible="visible" @close="handleClose">
            <cui-card style="width: 400px; height: 300px">
                <template #header>Header</template>
                Hello
            </cui-card>
        </cui-modal>
    </div>
</template>
