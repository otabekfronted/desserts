import { useState } from "react";
import { useSelector } from "react-redux";
function Modal() {
    const [showModal, setShowModal] = useState(false);
    const { ordered, orderTotal, totalPrice } = useSelector(
        (state) => state.orders
    );
    return (
        <div>
            {
                <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div class="bg-white rounded-lg shadow-lg w-96 p-6">
                        <div class="flex justify-center items-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-10 w-10 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-center mb-4">
                            Order Confirmed
                        </h2>
                        <p class="text-center mb-4">
                            We hope you enjoy your food!
                        </p>
                        <div class="bg-gray-100 rounded-md p-4 mb-4">
                            <div class="flex justify-between items-center mb-2">
                                <img
                                    src="classic-tiramisu.jpg"
                                    alt="Classic Tiramisu"
                                    class="w-12 h-12 rounded-md"
                                />
                                <span class="font-medium">
                                    Classic Tiramisu
                                </span>
                                <span class="text-gray-500">1x @ $5.50</span>
                                <span class="font-bold">$5.50</span>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <img
                                    src="vanilla-bean-creme-brulee.jpg"
                                    alt="Vanilla Bean Crème Brûlée"
                                    class="w-12 h-12 rounded-md"
                                />
                                <span class="font-medium">
                                    Vanilla Bean Crème Brûlée
                                </span>
                                <span class="text-gray-500">4x @ $7.00</span>
                                <span class="font-bold">$28.00</span>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <img
                                    src="vanilla-panna-cotta.jpg"
                                    alt="Vanilla Panna Cotta"
                                    class="w-12 h-12 rounded-md"
                                />
                                <span class="font-medium">
                                    Vanilla Panna Cotta
                                </span>
                                <span class="text-gray-500">2x @ $6.50</span>
                                <span class="font-bold">$13.00</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mb-4">
                            <span class="font-medium text-lg">Order Total</span>
                            <span class="font-bold text-xl">${orderTotal}</span>
                        </div>
                        <button class="w-full font-semibold bg-[#C73B0F] pt-4 pb-4 rounded-[50px] mt-5 text-white hover:bg-orange-600">
                            Start New Order
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Modal;
