import Special from "../Special/Special";

const MySelf = ({ring}) => {
    return (
        <div>
            <h2>Me</h2>
            <section className="flex">
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default MySelf;