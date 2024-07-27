import { useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
    const [cart, setCart] = useState(true);
    const [modal, setModal] = useState(false);
    const { ordered, orderTotal, totalPrice } = useSelector(
        (state) => state.orders
    );
    const modall = () => {
        setModal(true);
    };

    return (
        <div className="w-[850px] h-full p-6 box-border rounded-xl bg-white">
            <h2 className="text-[#C73B0F] font-bold text-2xl">
                Your Cart ({orderTotal})
            </h2>
            {orderTotal === 0 ? (
                <div className="flex justify-center items-center flex-col pt-4 pb-4 mt-6 mb-6">
                    <img
                        className="w-32 h-32"
                        src="../public/images/illustration-empty-cart.svg"
                        alt="Empty Cart"
                    />
                    <p className="text-[#87635A]">
                        Your added items will appear here
                    </p>
                </div>
            ) : (
                <div>
                    {ordered.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center mb-4 p-4 border rounded-lg"
                        >
                            <img
                                className="w-16 h-16"
                                src={item.image}
                                alt={item.name}
                            />
                            <div className="flex-1 ml-4">
                                <h3 className="text-lg font-semibold">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">
                                    ${item.price}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Quantity: {item.quantity}
                                </p>
                                <p>Total: {orderTotal}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-between items-center mb-6">
                <p className="text-[#260F08] font-normal">Order Total</p>
                <p className="text-[#260F08] font-semibold text-2xl">
                    ${totalPrice}
                </p>
            </div>
            <div className="bg-[#FCF8F6] flex justify-center items-center gap-[0.75px] w-80 h-[52px] mb-6">
                <img
                    src="../public/images/icon-carbon-neutral.svg"
                    alt="Natural"
                />
                <p>
                    This is a
                    <span className="font-semibold"> carbon-neutral</span>
                    delivery
                </p>
            </div>
            <button
                onClick={() => modall()}
                className="w-80 font-semibold bg-[#C73B0F] pt-4 pb-4 rounded-[50px] mt-5 text-white"
            >
                Confirm Order
            </button>
        </div>
    );
}

export default Cart;
