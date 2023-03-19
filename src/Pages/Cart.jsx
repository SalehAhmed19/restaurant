import { Alert, Box, Collapse, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import useCarts from "../Hooks/useCarts";
import CartItem from "./CartItem";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  const [carts] = useCarts();
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-24 p-10">
      <h2 className="text-4xl font-bold">Cart</h2>
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
        {carts.map((cart) => (
          <CartItem key={cart._id} cart={cart} setOpen={setOpen} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
