import { createSlice } from "@reduxjs/toolkit";

export const GoodReducerGoods = createSlice({
    name: "Good",
    initialState: { goods: [] },
    reducers: {
        addGoods: (state, data) => {
            const newGoods = {
                id: Date.now(),
                title: data.payload,
                completed: false
            }
            state.goods.push(newGoods);
        },
        deleteGood: (state, data) => {
            const iddel = data.payload;
            console.log(iddel);
            state.goods = state.goods.filter((item) => item.id !== iddel)
        },
        completedGood: (state, data) => {
            const idcompl = data.payload;
            const index = state.goods.findIndex(item => item.id === idcompl);
            state.goods[index].completed = !state.goods[index].completed;
        },
        removeTask: (state, data) => {
            const rmT = data.payload;
            state.goods.map(item => { if (item.completed === true) { item.completed = false } else return })
        },
        deleteAllTask: (state, data) => {
            state.goods = [];
        }
    }
})

export const { addGoods, deleteGood, completedGood, removeTask, deleteAllTask } = GoodReducerGoods.actions;
export const selectGoods = state => state.good.goods;
export default GoodReducerGoods.reducer;
