import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
// import Modal from "./components/Modal";

function App() {
    return (
        <div>
            <div className="flex justify-between  w-full bg-[#FCF8F6] pl-16 pr-16  pt-11">
                <ProductsList />
                <Cart />
            </div>
            <div className="flex justify-center items-center relative bottom-[1000px] ">
                {/* <Modal /> */}
            </div>
        </div>
    );
}

export default App;
