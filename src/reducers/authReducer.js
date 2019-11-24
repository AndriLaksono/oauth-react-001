const authReducer = (state = null, action) => {
    console.log("[action authreducer] ",action.payload);
    switch (action.type) {
        case 'GET_USER':
            return action.payload;
        default:
            return state;
    }
}
export default authReducer;