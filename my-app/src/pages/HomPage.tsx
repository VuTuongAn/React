import { useState } from "react";
import CardPizza from "../sections/CardPizza";
import Pizza from "../models/pizza.model";
import CountPizza from "../sections/CountPizza";


const HomePage = () => {
    const [pizzas] = useState<Pizza[]>([
        { id: 1, title: 'Pizza thịt', decsription: 'Pizza làm bằng thịt cực ngon' },
        { id: 2, title: 'Pizza chay', decsription: 'Pizza làm bằng rau cực ngon' }
        ,])

    const [count, setCount] = useState(0);

    const [iscount, setIsCount] = useState(false);

    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
            <div className="wrapper-card-items">
                {
                    pizzas.map((pizza, index) => (
                        <CardPizza key={index} id={pizza.id} title={pizza.title} decsription={pizza.decsription} />
                    ))
                }
            </div>
            <button onClick={() => setIsCount(true)}>Open count</button>
            <button onClick={() => setIsCount(false)}>Close count</button>
            <div>{count}</div>
            {iscount && <CountPizza count={count} setCount={(count) => setCount(count)} />}
        </div>
    );
}
export default HomePage;