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
        <section>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Cadastrar</button>
            </form>

        </section>
    )
}

export default FormCadastro