import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({name,ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                {ring && <Special ring={ring}></Special>}
                {name === 'Feona' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;