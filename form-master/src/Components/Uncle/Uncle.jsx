import Cousin from "../Cousin/Cousin";

const Uncle = ({ring}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rafsan'} ring={ring}></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;