import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a0295f8a-9fa1-4dbc-8a4a-eedb6d5d31b8',
    },
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
            return response.data
        })
    },
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`)
    },
    unfollow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, { status })
    },
}

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
    },
}
