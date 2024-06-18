import LogoPizza from '../assets/pizza.png';
import Pizza from '../models/pizza.model';

type Props = Pizza;
const CardPizza = ({ id, name, phone }: Props) => {
    return (
        <div className="card-items">
            <img className="card-image-pizza" src={LogoPizza} alt="Pizza" />
            <div style={{ height: '50%', width: '100%' }}></div>
            <div className="card-content">
                <div>
                    <div style={{ fontSize: '20px', fontWeight: 600, color: '#fff' }}>{name}</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginTop: '.5rem' }}>{phone}</div>
                </div>
            </div>
        </div>
    )
}
export default CardPizza;