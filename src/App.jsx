import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";

function App() {
    return (
        <div className="flex justify-between  w-full bg-[#FCF8F6] pl-16 pr-16  pt-11">
            <ProductsList />
            <Cart />
        </div>
    );
}

export default App;
