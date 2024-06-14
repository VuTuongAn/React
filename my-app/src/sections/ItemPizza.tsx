import Pizza from "../models/pizza.model"

type Props = Pizza;
const ItemPizza = ({ title, decsription }: Props) => {
    return (
        <div className="card-item">
            <div>{title}</div>
            <div>{decsription}</div>
        </div>
    );
}
export default ItemPizza;