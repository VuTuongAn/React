import CardPizza from "../sections/CardPizza";


const HomePage = () => {
    return (
        <div style={{ height: 'calc(100vh - 309px)', padding: '4rem 4rem', overflowY: 'auto' }}>
            <div className="wrapper-card-items">
                <CardPizza title="Pizza thịt" decsription="Pizza làm bằng thịt cực ngon" />
            </div>
        </div>
    );
}
export default HomePage;