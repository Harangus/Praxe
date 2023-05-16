import './App.css';
import './Kalk.css';
import {useState} from "react";

function KalkForm()
{
    const [vysledek, setVysledek] = useState(0);
    const [znamenko, setZnamenko] = useState("plus");
    const [cisloA, setCisloA] = useState(0);
    const [cisloB, setCisloB] = useState(0);

    function setNumberA(event)
    {
       setCisloA(event.target.value);
    }

    function setNumberB(event)
    {
        setCisloB(event.target.value);
    }

    function vybratZnamenko(event)
    {
        setZnamenko(event.target.value);
    }

    function vypocet()
    {
       switch (znamenko)
       {
        case "plus":
            setVysledek(parseInt(cisloA) + parseInt(cisloB));
            break;
        case "minus":
            setVysledek(parseInt(cisloA) - parseInt(cisloB));
            break;
        case "deleno":
            if (parseInt(cisloB) !== 0)
            {
                setVysledek(parseInt(cisloA) / parseInt(cisloB));
            }
            else
            {
                setVysledek("Nelze dělit nulou vole!");
            }
            break;
        case "krat":
            setVysledek(parseInt(cisloA) * parseInt(cisloB));
            break;
        default:
            break;
       }
    }

    return(
    <div className='App-header'>
        <div>
        <input type='number' className='input' onChange={setNumberA}></input>
        <select className='input' onChange={vybratZnamenko}>
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="deleno">/</option>
          <option value="krat">*</option>
        </select>
        <input type='number' className='input' onChange={setNumberB}></input>
      </div>
      <button className='tlacitko' onClick={vypocet}>Vypocitat</button>
      <h1>Vysledek: {vysledek}</h1>
    </div>
    );
};

export default KalkForm;