import { useState, useEffect } from "react";

import { incrementOrder } from "../features/dessertSlice";
import { decrementOrder } from "../features/dessertSlice";
import { useDispatch } from "react-redux";

function SingleCart({ dessert }) {
    const dispatch = useDispatch();
    const [addButtons, setAddButtons] = useState(false);

    useEffect(() => {
        if (dessert.amount == 0) {
            setAddButtons(false);
        }
    }, [dessert.amount]);

    return (
        <div className="w-64 h-[370px] bg-white m-2 rounded-md">
            <img
                src={dessert.image.desktop}
                alt={dessert.name}
                className="w-full h-52 object-cover mb-4 rounded-md"
            />
            {(!addButtons || dessert.amount == 0) && (
                <button
                    onClick={() => {
                        setAddButtons(true);
                        dispatch(incrementOrder(dessert.id));
                    }}
                    className="w-40 flex justify-center gap-2 border-black border-2 rounded-2xl p-2 relative bottom-10 bg-white m-auto"
                >
                    <img src="../public/images/icon-add-to-cart.svg" alt="" />
                    Add To Cart
                </button>
            )}
            {addButtons && (
                <div className="w-40 h-11 flex justify-center gap-2 border-black border-2 rounded-2xl p-2 relative bottom-10 bg-[#C73B0F] m-auto text-white">
                    <button
                        onClick={() => dispatch(decrementOrder(dessert.id))}
                        className=" flex items-center justify-center w-6 h-6  border-[2px] rounded-full border-white box-border mr-10 "
                    >
                        -
                    </button>
                    <span>{dessert.amount}</span>
                    <button
                        onClick={() => dispatch(incrementOrder(dessert.id))}
                        className=" flex items-center justify-center ml-10 w-6 h-6  border-[2px] rounded-full border-white box-border"
                    >
                        +
                    </button>
                </div>
            )}
            <div className="mt-[-20px] pl-2 ">
                <p className="text-[#87635A] font-n">{dessert.category}</p>
                <p className="text-[#260F08] font-semibold text-2xl">
                    {dessert.name}
                </p>
                <p className="text-[#C73B0F] pt-1 font-semibold">
                    {dessert.price}$
                </p>
            </div>
        </div>
    );
}

export default SingleCart;
