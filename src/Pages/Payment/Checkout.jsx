// // import axios from "axios";
// // import React from "react";
// // import { useAuthState } from "react-firebase-hooks/auth";
// // import { MdOutlinePayment } from "react-icons/md";
// // import auth from "../../firebase.init";

// // const Checkout = ({ carts }) => {
// //   const [user] = useAuthState(auth);
// //   const handleCheckout = () => {
// //     console.log(carts);
// //     axios
// //       .post("https://kayi-tribe-restuarant.onrender.com/api/create-checkout-session", {
// //         carts: carts,
// //         user: user.email,
// //       })
// //       .then((res) => {
// //         if (res.data.url) {
// //           window.location.href = res.data.url;
// //         }
// //       })
// //       .catch((err) => {
// //         console.log(err.message);
// //       });
// //   };
// //   return (
// //     <>
// //       <button
// //         onClick={() => handleCheckout()}
// //         className="flex items-center justify-center bg-[#F5C332] h-10 px-5 ml-auto"
// //       >
// //         <MdOutlinePayment className="lg:mr-3" />
// //         Checkout
// //       </button>
// //     </>
// //   );
// // };

// // export default Checkout;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// // import useFood from "../../Hooks/useFood";

// function Checkout() {
//   const { id } = useParams();
//   const [item, setItem] = useState({});
//   useEffect(() => {
//     fetch(`https://kayi-tribe-restuarant.onrender.com/api/desserts/${id}`)
//       .then((res) => res.json())
//       .then((data) => setItem(data));
//     fetch(`https://kayi-tribe-restuarant.onrender.com/api/drinks/${id}`)
//       .then((res) => res.json())
//       .then((data) => setItem(data));
//     fetch(`https://kayi-tribe-restuarant.onrender.com/api/main/${id}`)
//       .then((res) => res.json())
//       .then((data) => setItem(data));
//   }, [id]);
//   console.log(item);
//   // const [food, setFood] = useFood();
//   return <div>Checkout {id}</div>;
// }

// export default Checkout;
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
  // const elements = useElements();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  console.log(stripePromise);
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
