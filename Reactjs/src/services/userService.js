import axios from "../axios"

const handleLoginApi = (phoneNumber, password) => {
    // { email, password } la 1 cach viet tat cua object khi ma key va value cung ten
    return axios.post('/api/login', { phoneNumber, password })
}

const getAllUsers = (id) => {
    // template string
    return axios.get(`/api/get-all-users?id=${id}`, { id })
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id })
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}

const bookingUserService = (info) => {
    // console.log(info)
    return axios.post('/api/booking-table', info)
}

export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService, editUserService, bookingUserService }