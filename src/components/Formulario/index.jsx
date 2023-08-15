import { useState, useEffect } from "react"

const Formulario = (props) => {

    const [mateiraA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [MateriaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("O componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("o estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para: " + mateiraA)
    }, [mateiraA, materiaB, MateriaC]);

    const alteraNome = (evento) => {
        //setNome(evento.target.value)
        setNome(estadoAnterior => {
            // estadoAnterior = valornovo
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = mateiraA + materiaB + MateriaC;
        const media = soma / 3;
        
        if (media >= 7) {
            return (
                <p>Ola, {nome} você foi aprovado</p>
            )
        }else {
            return (
                <p>Ola, {nome} você não foi aprovado</p>
            )
        }
    }

    return (
        <form action="">
            <ul>
            {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota máteira A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota máteira B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota máteira C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario