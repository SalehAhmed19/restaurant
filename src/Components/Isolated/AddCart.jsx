import React, { useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {
  Alert,
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const AddCart = ({ quantity, setTotal, food, setQuantity }) => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const handleCart = (event) => {
    event.preventDefault();
    const item = {
      foodImg: food?.img,
      foodId: food?._id,
      food: food?.name,
      quantity: parseInt(quantity),
      price: parseInt(food?.price),
      customerEmail: user?.email,
    };
    fetch("https://kayi-tribe-restuarant.onrender.com/api/cart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setOpen(true);
          setTimeout(() => setOpen(false), 3000);
        }
        setTotal(0);
        setQuantity(0);
      });
    event.target.reset();
  };
  return (
    <div className="my-5">
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
            Successfully add to the cart
          </Alert>
        </Collapse>
      </Box>
      <div className="flex flex-col lg:flex-row">
        <button
          onClick={handleCart}
          type="submit"
          className="bg-[#F7C531] px-5 py-3 my-2 flex justify-between items-center"
        >
          <BsCartCheck className="lg:mr-3" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddCart;
