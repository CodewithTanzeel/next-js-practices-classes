"use client"

import { placeOrder } from "./utilis"

function OrderButton() {

    let onOrderPlace = async () => {
        // Use server function
        await placeOrder()
    }

    return (
        <button onClick={onOrderPlace} className="mx-4 p-2 bg-blue-500">
            Order
        </button>
    )
}

export default OrderButton

// A util file is where you keep reusable helper functions or tools that are used in different parts of your code, making your code cleaner and more organized.