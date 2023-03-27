import React from "react";
import useOrders from "../Hooks/useOrders";

const Orders = () => {
  const [orders, setOrders] = useOrders();
  return (
    <div className="lg:mx-20">
      <h2 className="text-4xl font-bold my-10">Orders</h2>
      <div>
        {orders?.map((order) => (
          <div className="p-5 my-2 bg-[#EAEBEC] rounded-md">
            <p>
              <span className="font-bold">Food Id:</span> {order._id}
            </p>
            <p>
              <span className="font-bold">Food Name: </span>
              {order.food}
            </p>
            <p>
              <span className="font-bold">Price: </span>${order.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
