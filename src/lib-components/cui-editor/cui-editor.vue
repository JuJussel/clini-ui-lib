<template>
    <div v-if="editor">
        <menu-bar :editor="editor" :customMenuItems="customMenuItems" style="height: 40px"></menu-bar>
        <editor-content :editor="editor" style="height: calc(100% - 70px)"/>
    </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./cui-editor-menu-bar.vue"

export default {
    components: {
        EditorContent,
        MenuBar
    },
    props: {
        customExtensions: {
            type: Array,
            default: []
        },
        customMenuItems: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            editor: null,
            options: {
                extensions: [
                    StarterKit                
                ]
            },
        };
    },
    mounted() {
        this.options.extensions = this.options.extensions.concat(this.customExtensions);
        this.editor = new Editor(this.options)
    },

    beforeUnmount() {
        this.editor.destroy()
    },
};
</script>

<style>
    .ProseMirror {
        outline: none !important;
        height: 100%;
        overflow: auto;
        padding: 10px
    }
</style>