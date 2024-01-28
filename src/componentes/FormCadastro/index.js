import { Link } from 'react-router-dom'
import  './FormCadastro.css'
import React, { useState } from 'react'

const FormCadastro = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
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
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Email:
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Senha:
                    <input
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <button className='bottonCadastro' type='submit'>Cadastrar</button>
                <br/>

               <Link to='/'> Ja tenho conta</Link>
            </form>

        </section>
    )
}

export default FormCadastro