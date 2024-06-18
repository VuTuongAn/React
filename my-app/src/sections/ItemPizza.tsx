import Pizza from "../models/pizza.model"

type Props = Pizza & {
    handleChangePerson: (data: Pizza) => void;
};
const ItemPizza = ({ name, phone, handleChangePerson }: Props) => {

    return (
        <div className="card-item">
            <div>{name}</div>
            <div>{phone}</div>
            <button onClick={() => handleChangePerson({ name: 'Data change from children', phone: 'Hoc react co ban' })}>Change Person</button>
        </div>
    );
}
export default ItemPizza;