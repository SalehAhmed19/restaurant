import { Alert, Box, Collapse, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import useCarts from "../Hooks/useCarts";
import CartItem from "./CartItem";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import Checkout from "../Pages/Payment/Checkout";

const Cart = () => {
  const [carts] = useCarts();
  const [open, setOpen] = useState(false);
  return (
    <div className="p-10 relative">
      <h2 className="text-4xl font-bold mb-5">Cart</h2>
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Successfully deleted cart item
          </Alert>
        </Collapse>
      </Box>
      <div className="border p-5 my-5">
        {/* <div className="border p-5">
          <Checkout carts={carts} />
        </div> */}
        {carts.map((cart) => (
          <>
            <CartItem key={cart._id} cart={cart} setOpen={setOpen} />
          </>
        ))}
        <div className="flex flex-col justify-center items-center">
          <Link to="/our-menu">
            <button className="bg-[#F7C531] px-5 py-3 my-2 flex justify-between items-center">
              {/* <BsCartCheck className="lg:mr-3" /> */}
              Buy More Food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
