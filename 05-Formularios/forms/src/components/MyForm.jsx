/* eslint-disable react/prop-types */
import './Myform.css';
import { useState } from 'react';

const MyForm = ({ user }) => {
    {/*6 - Controller do input*/}
    {/*3 - Gerenciamento de dados*/}
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulário.")
        console.log(name, email);
        //Limpar formulário
        setName("");
        setEmail("");
    }

    return (
        <>
        {/*1 - Criação de formulário */}
        {/*5 - Envio do formulario */}
        <form onSubmit={handleSubmit}>
            <h2>Cadastro</h2>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                type="text" 
                name="name"
                placeholder="Digite seu nome" 
                onChange={handleName}
                value={name}
                />
            </div>
            {/*2 - Label envolvendo input */}
            <label>
                <span>E-mail: </span>
                {/*Simplificação de manipulação de state */}
                <input 
                type="email" 
                name="email" 
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            {/* 8 - Textarea*/}
            <label>
                <span>Bio: </span>
                <textarea name="bio" placeholder="Descrição do usuário"></textarea>
            </label>
            <button type="submite" value="Enviar">Enviar</button>
        </form>
        </>
    )
}

export default MyForm;