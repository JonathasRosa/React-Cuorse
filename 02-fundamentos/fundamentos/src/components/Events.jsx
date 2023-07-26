const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    }
    const renderSomething = (x) => {
        if(x) {
            return <h1>Rederizando Isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }
    return(
        <div>
            <div>
                <button onClick={ handleMyEvent }>Click aqui!</button>
            </div>
            <div>
                <button onClick={ () => {
                    return console.log("Clicou!");
                }}>Click aqui também!</button>
                <button onClick={() => {
                    // eslint-disable-next-line no-constant-condition
                    if (true) {
                        console.log("Isso não deveria existir =)");
                    }
                }}>Click aqui, por favor!</button>
            </div>
            { renderSomething(true) }
            { renderSomething(false) }
        </div>
    ) 
}

export default Events;