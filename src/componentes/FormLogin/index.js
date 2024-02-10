import { Link, useNavigate } from 'react-router-dom'
import UserServices from '../../services/UserServices'
import { validarEmail, validarSenha } from '../../ultis/Validadores'
import './FormLogin.css'
import React, { useState } from 'react'

const apiUrl = process.env.REACT_APP_API_LOGIN;

const userService = new UserServices()

const FormLogin = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navegate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const response = await userService.login(form)
// console.log('minha resposta', response);
            if(response === true) {
                alert('Usuario logado com sucesso.')
                navegate('/organo')
            }
            setLoading(false)
        } catch(err) {
            alert('Algo deu errado no login ' + err)
        }

    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
    }


    return (
        <section className='formLogin'>
            <form onSubmit={handleSubmit}>
                <h1>Faça seu login</h1>
                <label>
                    Email:
                    <input
                        type='email'
                        placeholder='Digite seu email'
                        name='email'
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        type='password'
                        placeholder='Digite sua senha'
                        name='password'
                        onChange={handleChange}
                    />
                </label>
                <br />
                <div> </div>
                <br/>
                <button 
                type='submit' 
                className='bottonLogin'
                disabled={loading === true || !validadorInput()}
                >
                    Login
                </button>
                <br />
                <br />

                <Link to='/cadastrar' > Cadastre-se! </Link>

            </form>
        </section>
    )
}

export default FormLogin