import { Link, useNavigate } from 'react-router-dom'
import  './FormCadastro.css'
import React, { useState } from 'react'

const FormCadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgError, setMsgError] = useState('');
    const navegar = useNavigate()

    const handleSubmit = (e) => {
        // const {name, email, password} = e.target;
        e.preventDefault()
        if(name === "" || email === "" || password === "") {
            setMsgError('Preencha todos os campos!')
            return;
        }

        const dadosUsuario = {
            name: name,
            email: email,
            password: password,
        }
        setName('')
        setEmail('')
        setPassword('')

        localStorage.setItem('usuario', JSON.stringify(dadosUsuario));
        alert('Cadastrado com sucesso!')

        navegar('/')
    }


    return(
        <section className='formCadastro'>
            <form onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>
                <label>
                    Nome:
                    <input
                        type='text'
                        name='name'
                        placeholder='Digite seu nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                
                <br/>
                <label>
                    Email:
                    <input
                        type='email'
                        name='email'
                        placeholder='Digite seu E-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                
                <br/>
                <label>
                    Senha:
                    <input
                        type='password'
                        name='password'
                        placeholder='Digite sua senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div> {msgError} </div>
                <br/>
                <button className='bottonCadastro' type='submit'>Cadastrar</button>
                <br/>

               <Link to='/'> Ja tenho conta</Link>
            </form>

        </section>
    )
}

export default FormCadastro