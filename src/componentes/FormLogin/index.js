import { Link } from 'react-router-dom'
import './FormLogin.css'
import React, { useState } from 'react'

const FormLogin = () => {
    
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    // const clickFormCadastro = () => {
    //     window.push('/Cadastrar')
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Dados do login', loginData);
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
                        value={loginData.email}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Senha:
                    <input
                        type='password'
                        name='password'
                        value={loginData.password}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <button type='submit' className='bottonLogin'>Login</button>
                <br/>
                <br/>
                
                <Link to='/cadastrar' > Cadastre-se! </Link>
                
            </form>
        </section>
    )
}

export default FormLogin