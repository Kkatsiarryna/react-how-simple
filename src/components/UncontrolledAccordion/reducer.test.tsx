import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should be true", () => {
    //data
    const state: StateType = {
        collapsed: false,
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectatiion
    expect(newState.collapsed).toBe(true);
})

test("collapsed should be false", () => {
    //data
    const state: StateType = {
        collapsed: true,
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expectatiion
    expect(newState.collapsed).toBe(false);
})

test("reducer should throw error because action type is incorrect", () => {
    //data
    const state: StateType = {
        collapsed: true,
    }

    expect ( ()=> {
        reducer(state, {type: 'FAKETYPE'})
    }).toThrowError();
})