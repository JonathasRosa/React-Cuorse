/* eslint-disable react/prop-types */
const ChangeMessageState = ({handleMessage}) => {
    const messages = ["oi", "Olá!","Oi, tudo bem?"]
  return (
    <>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </>
  )
}

export default ChangeMessageState;