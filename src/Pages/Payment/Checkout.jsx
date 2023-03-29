import { Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { Elements, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";

const Checkout = ({
  layout,
  setLayout,
  cart,
  total,
  quantity,
  setSnackOpen,
}) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  return (
    <div>
      <React.Fragment>
        <Modal open={!!layout} onClose={() => setLayout(undefined)}>
          <ModalDialog
            // sx={{ width: "500px" }}
            aria-labelledby="layout-modal-title"
            aria-describedby="layout-modal-description"
            layout={layout}
          >
            <ModalClose />
            {/* <Typography id="layout-modal-title" component="h2">
              Modal Dialog
            </Typography>
            <Typography id="layout-modal-description" textColor="text.tertiary">
              This is a <code>{layout}</code> modal dialog. Press{" "}
              <code>esc</code> to close it.
            </Typography> */}
            <div className="flex flex-col justify-center items-center">
              <img className="w-40 rounded-md mb-2" src={cart.foodImg} alt="" />
              <div>
                <h2 className="text-center text-xl font-bold">{cart.food}</h2>
                <h4 className="text-center ">
                  <span className="font-bold">Total Price: </span>&#2547;{total}
                </h4>
                <h4 className="text-center ">
                  <span className="font-bold">Quantity: </span>
                  {quantity}
                </h4>
              </div>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                cart={cart}
                total={total}
                setLayout={setLayout}
                quantity={quantity}
                setSnackOpen={setSnackOpen}
              />
            </Elements>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default Checkout;
