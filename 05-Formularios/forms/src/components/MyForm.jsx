import './Myform.css';
import { useState } from 'react';

const MyForm = () => {
    {/*3 - Gerenciamento de dados*/}
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    };
    return (
        <>
        {/*1 - Criação de formulário */}
        <form>
            <h2>Cadastro</h2>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                type="text" 
                placeholder="Digite seu nome" 
                onChange={handleName}
                />
            </div>
            {/*2 - Label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite seu email"/>
            </label>
            <input type="submite" value="Enviar" />
        </form>
        </>
    )
}

export default MyForm;