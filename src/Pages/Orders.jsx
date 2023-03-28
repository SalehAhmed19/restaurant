import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import useOrders from "../Hooks/useOrders";

const Orders = () => {
  const [orders, setOrders] = useOrders();
  const [step, setStep] = useState(1);
  const steps = ["Order Confirmed", "Shipped", "Delivered"];
  return (
    <div className="lg:mx-20">
      <h2 className="text-4xl font-bold my-10">Orders</h2>
      <div>
        {orders?.map((order) => (
          <div className="bg-[#F9FAFC] flex justify-between items-center rounded-md">
            <div className="p-5 my-2 rounded-md flex items-center">
              <img className="w-20 mr-4 rounded-md" src={order.img} alt="" />
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
            <div className="w-1/2">
              <Stepper activeStep={step}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
