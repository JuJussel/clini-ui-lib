<template>
    <Table :data="files">
        <template #header>
            <div class="cui-file-upload-header">
                {{ title }}
                <cui-button style="margin-left: 20px" label="ファイル選択" @click="triggerFileSelect" />
                <input :accept="acceptedFiles" class="cui-file-upload-native-input" type="file" ref="file" v-on:change="addFile()"/>
            </div>
        </template>
        <template v-slot:row="row">
            <td>
                <i :class="fileTypes[row.type]" style="margin-right: 10px; font-size: 20px" />
                {{ row.name }}
            </td>
            <td>
                <cui-button icon="far fa-trash-alt" danger @click="removeFile(row._index)" />
            </td>
        </template>
        <template #footer>
            <div class="cui-file-upload-note">
                <span> {{ noteDisplay }} </span>
            </div>
        </template>
    </Table>
</template>

<script>

import Table from '../cui-table/cui-table.vue'

export default {
    components: {Table},
    emits: ['change'],
    props: {
        title: {default: 'ファイルアップロード', type: String},
        accept: {default: ['.txt','.csv','.bmp','.png','.jpeg','.jpg','.pdf','.pptx','.xlsx','.docx'], type: Array},
        note: {
            default: '',
            type: String
        },

    },
    data() {
        return {
            files: [],
            fileTypes: {
                'text/plain': 'far fa-file-alt',
                'text/csv': 'fas fa-file-csv',
                'image/bmp': 'far fa-file-image',
                'image/png': 'far fa-file-image',
                'image/jpeg': 'far fa-file-image',
                'application/pdf': 'far fa-file-pdf',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'far fa-file-powerpoint',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'far fa-file-word',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' : 'far fa-file-excel'
            },
            noteDisplay: ''
        }
    },
    methods: {
        triggerFileSelect() {
            this.$refs.file.click()
        },
        addFile() {
            let file = this.$refs.file.files[0]
            let ext = file.name.split('.');
            let last = ext.length - 1;
            ext = '.' + ext[last];
            if (this.accept.includes(ext)) {
                this.files.push(file);        
            }
            this.$emit('change', this.files);
        },
        removeFile(index) {
			this.files.splice(index, 1);
            this.$emit('change', this.files);
		}
    },
    computed: {
        acceptedFiles() {
            let string = "";
            this.accept.forEach(element => {
                string = string + element + ',';
            });
            string = string.slice(0, -1);
            return string;
        }
    },
    watch: {
        note() {
            this.noteDisplay = this.note
        }
    }
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
    .cui-file-upload-note {
        font-size: 12px;
        margin-left: 10px;
        color: var(--cui-danger);
        height: 15px;
        line-height: 12px;
    }

</style>