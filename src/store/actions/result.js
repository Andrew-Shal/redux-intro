import * as actionTypes from './actionTypes';
//action creators
export const saveResult = res => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout( () => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(res))
        },2000);
    }
};
export const deleteResult = (resElID) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId:resElID
    }
};