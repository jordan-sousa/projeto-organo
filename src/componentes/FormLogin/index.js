import { Link, useNavigate } from 'react-router-dom'
import UserServices from '../../services/UserServices'
import { validarEmail, validarSenha } from '../../ultis/Validadores'
import './FormLogin.css'
import React, { useState } from 'react'

const userService = new UserServices()

const FormLogin = () => {
    const [loading, setLoading] = useState(false)
    // const [form, setForm] = useState([])
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const navegate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const { email, password } = e.target.elements;
    
        try {
            setLoading(true);
    
            const getUserStorage = localStorage.getItem('usuario');
    
            if(!getUserStorage){
                alert('Usuário não encontrado!');
                return false;
            }
    
            const user = JSON.parse(getUserStorage);
    
            if (user.email === form.email.value && user.password === form.password.value) {
                alert('Usuário logado com sucesso');
                navegate('/organo');
            } else {
                alert('Email ou senha incorretos');
            }
    
            setLoading(false);
        } catch(err) {
            alert('Algo deu errado no login ' + err);
        }
    }
    

    // const handleChange = (e) => {
    //     setForm({...form, [e.target.name]: e.target.value})
    //     console.log(e);
    // }

    // const validadorInput = () => {
    //     return validarEmail(form.email) && validarSenha(form.password)
    // }


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
                        // onChange={handleChange}
                        required 
                    />
                </label>
                <br />
                <label>
                    Senha:
                    <input
                        type='password'
                        placeholder='Digite sua senha'
                        name='password'
                        // onChange={handleChange}
                        required 
                    />
                </label>
                <br />
                <div> </div>
                <br/>
                <button 
                type='submit' 
                className='bottonLogin'
                disabled={loading}
                >
                    {loading ? 'Carregando...' : 'Login'}
                </button>
                <br />
                <br />

                <Link to='/cadastrar' > Cadastre-se! </Link>

            </form>
        </section>
    )
}

export default FormLogin