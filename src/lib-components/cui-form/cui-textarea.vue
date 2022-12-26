<template>
    <div>
        <label class="cui-textarea-label" v-if="label">
            <span style="margin-right: 10px"> {{ label }} </span>
            <span v-if="required"> {{ trans.required }} </span>
        </label>
        <div style="position: relative">
            <textarea
                class="cui-textarea"
                v-bind:class="{ disabled, darker }"
                v-bind="modelValue"
                @input="changeValue"
                :disabled="disabled"
                clearable
                :placeholder="placeholder"
                :rows="rows"
                :cols="cols"
            />
        </div>
        <div class="cui-textarea-note" v-if="!noNote">
            <span> {{ noteDisplay }} </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CuiTextarea",
    props: {
        modelValue: {
            default: "",
        },
        type: {
            default: "text",
        },
        label: {
            default: null,
        },
        required: {
            default: false,
            type: Boolean,
        },
        disabled: {
            default: false,
            type: Boolean,
        },
        placeholder: {
            default: "",
        },
        noNote: {
            default: false,
            type: Boolean,
        },
        note: {
            default: "",
            type: String,
        },
        darker: {
            default: false,
            type: Boolean,
        },
        rows: {
            default: "2",
            type: String,
        },
        cols: {
            default: "50",
            type: String,
        },
    },
    emits: ["update:modelValue"],
    methods: {
        changeValue(value) {
            this.noteDisplay = "";
            this.$emit("update:modelValue", value.target.value);
        },
    },
    data() {
        return {
            trans: {
                required: "*必須",
            },
            noteDisplay: "",
        };
    },
    watch: {
        note() {
            this.noteDisplay = this.note;
        },
    },
};
</script>

<style scoped>
.cui-textarea-label {
    font-size: 14px;
    margin-left: 10px;
}
.cui-textarea {
    background: var(--cui-gray-0);
    border: none;
    border-radius: 12px;
    padding: 5px 10px;
    transition: all 0.2s ease;
}
.cui-textarea.darker {
    background: var(--cui-gray-3);
}
.cui-textarea.disabled {
    color: var(--cui-gray-3);
}
.cui-textarea:focus {
    outline: none;
    padding-left: 13px;
    padding-right: 7px;
    background: var(--cui-gray-1);
}
.cui-textarea.darker:focus {
    background: var(--cui-gray-4);
}
.cui-textarea.darker:hover {
    background: var(--cui-gray-4);
}
.cui-textarea-note {
    font-size: 12px;
    margin-left: 10px;
    color: var(--cui-danger);
    height: 15px;
    line-height: 12px;
}
</style>