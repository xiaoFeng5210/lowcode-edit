<template>
    <div class="component-list">
        <div v-for="(item, index) in list" :key="index" class="list">
            <span class="iconfont" :class="'icon-' + item.icon"></span>
            <span>{{ item.label }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import componentList from '../../custom-component/component-list'

export default defineComponent({
    name: 'ComponentList',
    components: {
    },
    setup: () => {
        const list = reactive(componentList);
        return { list }
    }
})
</script>

<style scoped lang="scss">
.component-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    .list {
        width: 45%;
        border: 1px solid #ddd;
        cursor: grab;
        margin-bottom: 10px;
        text-align: center;
        color: #333;
        padding: 2px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:active {
            cursor: grabbing;
        }
        .iconfont {
            margin-right: 4px;
            font-size: 20px;
        }
        .icon-wenben,
        .icon-tupian {
            font-size: 18px;
        }
    }
}
</style>