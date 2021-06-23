<template>
    <div
        class="shape"
        :class="{ active }"
        @click="selectCurComponent"
        @mousedown="handleMouseDownOnShape"
    ></div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";
// import { Props } from "./tsType"
export default defineComponent({
    name: "Shape",
    props: {
        // 是否选中状态
        active: {
            type: Boolean,
            default: false
        },
        element: {
            require: true,
            type: Object
        },
        defaultStyle: {
            require: true,
            type: Object
        },
        index: {
            require: true,
            type: [Number, String]
        }
    },
    setup: (props: any) => {
        const store = useStore();
        const selectCurComponent = (e: MouseEvent) => {
            // 阻止向父组件冒泡
            e.stopPropagation()
            e.preventDefault()
            store.commit('hideContextMenu')
        };
        const handleMouseDownOnShape = (e: MouseEvent) => {
            // 证明是已经点击组件了
            store.commit('setClickComponentStatus', true);
            if (props.element.component !== 'v-text' && props.element.component !== 'rect-shape') {
                e.preventDefault()
            }

            e.stopPropagation();
            store.commit('setCurComponent', { component: props.element, index: props.index });
            if (props.element.isLock) return;

            // cursors = getCursor();

        }
        return {
            selectCurComponent,
            handleMouseDownOnShape
        }
    }
})
</script>
