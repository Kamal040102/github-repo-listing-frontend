import axios from "axios"

const SERVER_URL = "https://github-server.onrender.com/api/v1"

export const getUserDataInitialize = () => ({
    type: "GET_USER_DATA_INITIALIZE"
})

export const getUserDataSuccess = (data) => ({
    type: "GET_USER_DATA_SUCCESS",
    payload: data
})

export const getUserDataFail = (error) => ({
    type: "GET_USER_DATA_FAIL",
    payload: error
})

export const getUserRepoData = (data) => ({
    type: "GET_USER_REPO_DATA_SUCCESS",
    payload: data
})

export const fetchUserData = (username) => {
    return (dispatch) => {
        axios.get(`${SERVER_URL}/github?user=${username}`).then((res) => {
            dispatch(getUserDataSuccess(res.data.data))
            axios.get(`${SERVER_URL}/github/repos?user=${username}`).then((res) => {
                dispatch(getUserRepoData(res.data.data))
            }).catch((err) => {
                dispatch(getUserDataFail(err.message))
            })
        }).catch((err) => {
            dispatch(getUserDataFail(err.message))
        })
    }
}