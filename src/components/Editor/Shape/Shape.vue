<template>
    <div class="shape" :class="{ active }" @click="selectCurComponent"></div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex";
export default defineComponent({
    name: "Shape",
    props: {
        // 是否选中状态
        active: {
            type: Boolean,
            default: false
        }
    },
    setup: () => {
        const store = useStore();
        const selectCurComponent = (e: MouseEvent) => {
            // 阻止向父组件冒泡
            e.stopPropagation()
            e.preventDefault()
            store.commit('hideContextMenu')
        };
        const handleMouseDownOnShape = (e: MouseEvent) => {
            store.commit('setClickComponentStatus', true)
        }
        return {
            selectCurComponent,
            handleMouseDownOnShape
        }
    }
})
</script>
