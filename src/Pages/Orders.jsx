import React from "react";
import useOrders from "../Hooks/useOrders";

const Orders = () => {
  const [orders, setOrders] = useOrders();
  return (
    <div className="lg:mx-20">
      <h2 className="text-4xl font-bold my-10">Orders</h2>
      <div>
        {orders?.map((order) => (
          <div className="p-5 my-2 bg-[#F9FAFC] rounded-md flex items-center">
            <img className="w-20 mr-4" src={order.img} alt="" />
            <div>
              <p>
                <span className="font-bold">Food Name: </span>
                {order.food}
              </p>
              <p>
                <span className="font-bold">Quantity: </span>
                {order.quantity} Pcs
              </p>
              <p>
                <span className="font-bold">Price: </span>&#2547;{order.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
