import { useEffect, useRef, useState } from "react";
import CardPizza from "../sections/CardPizza";
import Pizza from "../models/pizza.model";
import ButtonField from "../components/ButtonFiled";
import TextFiled from "../components/TextFiled";


const HomePage = () => {
    const [pizzas, setPizza] = useState<Pizza[]>([])
    const [isLoading] = useState(false);
    const pageRef = useRef<number>(1);
    const pageRefChangeHTML = useRef<HTMLDivElement>(null);
    console.log('PageRef', pageRef);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPizza(data));
    }, []);
    ;


    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
            <TextFiled placeholder="Search pizza" width="250px" />
            <div className="wrapper-card-items">
                {
                    pizzas.map((item, index) => (
                        <CardPizza key={index} id={item.id} name={item.name} phone={item.phone} />
                    ))
                }
            </div>
            <button onClick={() => console.log('PageRef', pageRef.current)}>Show value page</button>
            <div ref={pageRefChangeHTML}>Vu Tuong An</div>
            <div style={{ display: "flex", justifyContent: "center", width: '100%' }}>
                <ButtonField loading={isLoading} onClick={() => pageRefChangeHTML.current?.setAttribute('style', 'color : red')}>Show more</ButtonField>
                <ButtonField loading={isLoading} onClick={() => pageRef.current = pageRef.current + 1}>Show more</ButtonField>
            </div>
        </div>
    );
}
export default HomePage;