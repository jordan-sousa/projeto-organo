import { Link, useNavigate } from 'react-router-dom'
import './FormLogin.css'
import React, { useState } from 'react'

const FormLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msgError, setMsgError] = useState('')
    const navegar = useNavigate()

    const handleSubmit = (e) => {
        
        e.preventDefault()
        
        const usuario = JSON.parse(localStorage.getItem("usuario"))

        if (!usuario || usuario.email !== email || usuario.password !== password) {
            setMsgError("Email ou senha invalidos!")
            return
        }

        alert("Login realizado com sucesso!")
        navegar('/organo')

    }


    return (
        <section className='formLogin'>
            <form onSubmit={handleSubmit}>
                <h1>Faça seu login</h1>
                <label>
                    Email:
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <div> {msgError} </div>
                <br/>
                <button type='submit' className='bottonLogin'>Login</button>
                <br />
                <br />

                <Link to='/cadastrar' > Cadastre-se! </Link>

            </form>
        </section>
    )
}

export default FormLogin