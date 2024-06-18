import { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import Pizza from "../models/pizza.model";
import CountPizza from "../sections/CountPizza";
import ButtonField from "../components/ButtonFiled";


const HomePage = () => {
    const [pizzas, setPizza] = useState<Pizza[]>([])

    const [count, setCount] = useState(0);

    const [iscount, setIsCount] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPizza(data));
    }, []);

    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
            <div className="wrapper-card-items">
                {
                    pizzas.map((item, index) => (
                        <CardPizza key={index} id={item.id} name={item.name} phone={item.phone} />
                    ))
                }
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: '100%' }}>
                <ButtonField>Show more</ButtonField>
            </div>
        </div>
    );
}
export default HomePage;