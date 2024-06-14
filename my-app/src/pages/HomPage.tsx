import { useEffect, useState } from "react";
import CardPizza from "../sections/CardPizza";
import Pizza from "../models/pizza.model";


const HomePage = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([
        { id: 1, title: 'Pizza thịt', decsription: 'Pizza làm bằng thịt cực ngon' },
        { id: 2, title: 'Pizza chay', decsription: 'Pizza làm bằng rau cực ngon' }
        ,])

    const [count, setCount] = useState(0);


    useEffect(() => {
        setPizzas([...pizzas, { id: 3, title: 'Pizza com', decsription: 'Pizza làm bằng com' }]);
    }, [count]);
    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
            <div className="wrapper-card-items">
                {
                    pizzas.map((pizza, index) => (
                        <CardPizza key={index} id={pizza.id} title={pizza.title} decsription={pizza.decsription} />
                    ))
                }
            </div>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}
export default HomePage;