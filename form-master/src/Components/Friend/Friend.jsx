import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>Has: {gift}</p>
        </div>
    );
};

export default Friend;