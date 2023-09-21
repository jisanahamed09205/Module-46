import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money,setMoney] = useState(1000)
    const ring = 'Diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money,setMoney]}>
                <RingContext.Provider value="gold">
                    <section className="flex">
                        <Father ring={ring}></Father>
                        <Uncle ring={ring}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * MAKE AN CONTEXT API TO THIS PROCESS
 * 1. create a context and export it
 * 2. add a provider for the context with a value
 * 3. use hook useContext to access value in the context API
 */