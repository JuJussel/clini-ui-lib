<template>
    <div v-if="editor">
        <menu-bar :editor="editor"></menu-bar>
        <editor-content :editor="editor" />
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
        options: {
            type: Object,
            default: {
                extensions: [
                    StarterKit,
                ]
            }
        }
    },
    data() {
        return {
            editor: null,
        };
    },
    mounted() {
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
    }
</style>