<template>
    <Table :data="files">
        <template #header>
            <div class="cui-file-upload-header">
                {{ title }}
                <cui-button style="margin-left: 20px" label="ファイル選択" @click="triggerFileSelect" />
                <input class="cui-file-upload-native-input" type="file" ref="file" v-on:change="addFile()"/>
            </div>
        </template>
        <template v-slot:row="row">
            <td>
                {{ row.name }}
            </td>
            <td>
                <cui-button icon="far fa-trash-alt" danger @click="removeFile(row._index)" />
            </td>
        </template>
    </Table>
</template>

<script>

import Table from '../cui-table/cui-table.vue'

export default {
    components: {Table},
    props: {
        title: {default: 'ファイルアップロード', type: String}
    },
    data() {
        return {
            files: [],
            fileTypes: {
                'image/jpeg': 'far fa-file-image',
                'application/pdf': 'far fa-file-pdf',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'far fa-file-word',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'far fa-file-excel'
            }
        }
    },
    methods: {
        triggerFileSelect() {
            this.$refs.file.click()
        },
        addFile() {
            console.log(this.$refs.file.files[0]);
            this.files.push(this.$refs.file.files[0]);
        },
        removeFile(index) {
			this.files.splice(index, 1)
		}
    },
}
</script>

<style>
    .cui-file-upload-header {
        display: flex;
        align-items: center;
    }
    .cui-file-upload-native-input {
        display: none;
    }
</style>