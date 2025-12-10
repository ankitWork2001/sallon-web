export const initialState = {
    step:1,
   
};
export const registerFromReducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            }  
        case 'PREV_STEP':
            return {
                ...state,
                step: state.step - 1
            }     
        default:
            return state;
    }
}