import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(false);
    const [name, setName] = useState("Carlos");
    return (
        <>
            <h1>Isso será exibído?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é Falso</p>}
            <h1>If Ternário</h1>
            {name === "Jonathas" ? (
                <div>
                    <p>O nome é Jonathas</p>
                </div>
            ) : (
                <di>
                    <p>Nome não encontrado</p>
                </di>
            )}
            <button onClick={() => setName("Jonathas")}>Clica aqui!!!</button>
        </>
    )
};

export default ConditionalRender;
