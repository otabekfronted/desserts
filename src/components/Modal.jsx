function Modal() {
    return (
        <div>
            <img src="../public/images/icon-order-confirmrd.svg" alt="" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
            <div className="flex justify-between items-center mb-6">
                <p className="text-[#260F08] font-normal">Order Total</p>
                <p className="text-[#260F08] font-semibold text-2xl">
                    ${totalPrice}
                </p>
            </div>
            <button className=" w-80 font-semibold bg-[#C73B0F] pt-4 pb-4 rounded-[50px] mt-5 text-white">
                Start New Order
            </button>
        </div>
    );
}

export default Modal;
