import axios from "axios";

const instance = axios.create({
    baseURL: `https://yesno.wtf/api`
})

export const answerAPI = {
    ask() {
        return instance.get(``)
    }
}