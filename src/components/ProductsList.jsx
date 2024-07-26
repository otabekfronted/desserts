// import { useState } from "react";
import { useEffect } from "react";
import SingleCart from "./SingleCart";

import { useDispatch, useSelector } from "react-redux";
import { addAllDeserts } from "../features/dessertSlice";

function ProductsList() {
    const dispatch = useDispatch();
    const { allDeserts } = useSelector((state) => state.orders);
    // const [desserts, setDesserts] = useState(null);
    useEffect(() => {
        fetch(
            "https://online-json-server-api.up.railway.app/project/66a0f00b1d2cd3eb1144361f/desserts"
        )
            .then((data) => data.json())
            .then((desserts) => dispatch(addAllDeserts(desserts.data)));
    }, []);
    return (
        <div className=" ">
            <h1 className="text-[40px] mb-8  text-[#260F08] font-bold">
                Desserts
            </h1>

            <div className=" flex flex-wrap justify-start">
                {allDeserts &&
                    allDeserts.map((dessert) => {
                        return (
                            <SingleCart dessert={dessert} key={dessert.id} />
                        );
                    })}
            </div>
        </div>
    );
}

export default ProductsList;
