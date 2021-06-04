<template>
    <div class="home">
        <Toolbar></Toolbar>

        <main>
            <!-- 左侧列表 -->
            <section class="left">
                <ComponentList />
            </section>

            <!-- 中间画布 -->
            <section class="center">
                <div class="content"></div>
            </section>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import Toolbar from '../../components/toolBar/index.vue'
import ComponentList from '../../components/componentList/ComponentList.vue'

export default defineComponent({
    name: 'main',
    components: {
        Toolbar,
        ComponentList
    },
    setup: () => {
    }
})
</script>

<style scoped lang="scss">
.home {
    height: 100vh;
    background: #fff;
    main {
        height: calc(100% - 64px);
        position: relative;
        .left {
            position: absolute;
            height: 100%;
            width: 200px;
            left: 0;
            top: 0;
            padding-top: 10px;
        }
        .right {
            position: absolute;
            height: 100%;
            width: 262px;
            right: 0;
            top: 0;
        }
        .center {
            margin-left: 200px;
            margin-right: 262px;
            background: #f5f5f5;
            height: 100%;
            overflow: auto;
            padding: 20px;
            .content {
                width: 100%;
                height: 100%;
                overflow: auto;
            }
        }
    }
    .placeholder {
        text-align: center;
        color: #333;
    }
}
</style>