import { useState } from "react";
import CardPizza from "../sections/CardPizza";
import Pizza from "../models/pizza.model";


const HomePage = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([
        { id: 1, title: 'Pizza thịt', decsription: 'Pizza làm bằng thịt cực ngon' },
        { id: 2, title: 'Pizza chay', decsription: 'Pizza làm bằng rau cực ngon' }
        ,])


    const handleRemovePizza = (id: number) => {
        const indexPizzas = pizzas.findIndex(pizza => pizza.id === id);
        // Clone array mới vào biến newPizzas
        let newPizzas = [...pizzas];
        newPizzas.splice(indexPizzas, 1);
        setPizzas(newPizzas);
    }

    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
            <div className="wrapper-card-items">
                {
                    pizzas.map((pizza, index) => (
                        <CardPizza key={index} id={pizza.id} title={pizza.title} decsription={pizza.decsription} handleRemovePizza={handleRemovePizza} />
                    ))
                }
            </div>
        </div>
    );
}
export default HomePage;