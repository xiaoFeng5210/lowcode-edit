import { createStore } from "vuex";

type State = {
    menuTop: number,
    menuLeft: number,
    menuShow: boolean
}

type Reload = {
    top: number,
    left: number
}

export default {
    state: {
        menuTop: 0, // 右击菜单数据
        menuLeft: 0, 
        menuShow: false
    },
    mutations: {
        showContextMenu(state: State, reload: Reload){
            state.menuShow = true;
            state.menuTop = reload.top;
            state.menuLeft = reload.left;
        },

        hideContextMenu(state: State) {
            state.menuShow = false
        }
    }
}