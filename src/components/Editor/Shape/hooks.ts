import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { mod360 } from "../../../utils/translate";

export const useCursor = () => {
    const store = useStore();
    const curComponent = store.state.curComponent;
    const angleToCursor = reactive([
        { start: 338, end: 23, cursor: 'nw' },
        { start: 23, end: 68, cursor: 'n' },
        { start: 68, end: 113, cursor: 'ne' },
        { start: 113, end: 158, cursor: 'e' },
        { start: 158, end: 203, cursor: 'se' },
        { start: 203, end: 248, cursor: 's' },
        { start: 248, end: 293, cursor: 'sw' },
        { start: 293, end: 338, cursor: 'w' }
    ]);
    // 每个点对应的初始角度
    const initialAngle = reactive({
        lt: 0,
        t: 45,
        rt: 90,
        r: 135,
        rb: 180,
        b: 225,
        lb: 270,
        l: 315,
    });
    // 八个方向
    const pointList = reactive(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'])
    const getCursor = () => {
        const rotate = mod360(curComponent.style.rotate);
    }
}