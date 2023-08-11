/* eslint-disable react/prop-types */
import './Myform.css';
import { useState } from 'react';

const MyForm = ({ user }) => {
    {/*6 - Controller do input*/}
    {/*3 - Gerenciamento de dados*/}
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário.")
        console.log(name, email, bio, role);
        //Limpar formulário
        setName("");
        setEmail("");
        setBio("");
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
                <textarea 
                name="bio" 
                placeholder="Descrição do usuário" 
                onChange={(e)=> setBio(e.target.value)} 
                value={bio}></textarea>
            </label>
            {/*9 - Select */}
            <label>
                <span>Função do Sistema</span>
                <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <button type="submite" value="Enviar">Enviar</button>
        </form>
        </>
    )
}

export default MyForm;