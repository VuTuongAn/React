import Pizza from "../models/pizza.model"

type Props = Pizza & {
    handleChangePerson: (data: Pizza) => void;
};
const ItemPizza = ({ title, decsription, handleChangePerson }: Props) => {

    return (
        <div className="card-item">
            <div>{title}</div>
            <div>{decsription}</div>
            <button onClick={() => handleChangePerson({ title: 'Data change from children', decsription: 'Hoc react co ban' })}>Change Person</button>
        </div>
    );
}
export default ItemPizza;