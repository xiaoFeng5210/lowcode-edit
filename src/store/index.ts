import { createStore } from "vuex";
import contextmenu from "./contextmenu"
const defaultState = {
    componentsData: [],
    curComponent: null,
    curComponentIndex: null,
    // 点击画布时是否点中组件，主要用于取消选中组件用
    // 如果没点击组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
    isClickComponent: false,
    ...contextmenu.state
};
export default createStore({
    state() {
        return defaultState;
    },
    mutations: {
        ...contextmenu.mutations,
        setClickComponentStatus(state: any, status) {
            state.isClickComponent = status
        },
        // 获取当前选中的组件以及下标index
        setCurComponent(state: any, { component, index }) {
            state.curComponent = component,
                state.curComponentIndex = index
        }
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
    },
    getters: {

    }
});