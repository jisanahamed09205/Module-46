import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ring}) => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h2>Special</h2>
            <p>Owner: {ring}</p>
            <p>Also: {gift}</p>
        </div>
    );
};

export default Special;