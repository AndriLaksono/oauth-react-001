import Axios from "axios";

export const fetchUserAction = () => {
    return async dispatch => {
        await Axios.get('api/current_user')
                .then(res => {
                    dispatch({ type: "GET_USER", payload: res.data });
                });
    }
}