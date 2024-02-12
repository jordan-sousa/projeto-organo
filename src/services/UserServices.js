import axios from "axios";

export default class UserServices {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_LOGIN + '/api'
        })
        
    }

    async login(dados) {
        const {data} = await this.axios.post('/login', dados)
        if(data) {
            console.log('qual é esse valor', data);
            localStorage.setItem("nome", data.user.nome)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("token", data.token.token)

            return true 
        }
        console.log(data);
        return
    }

    async cadastrar (dados) {
        return this.axios.post('/user', dados)
    }

    usuarioAutenticado() {
        return localStorage.getItem("token") !== undefined ? true : false
    }

}
