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

const AddCart = ({ total, setTotal, food, quantity, setQuantity }) => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const handleCart = (event) => {
    event.preventDefault();
    const item = {
      foodImg: food?.img,
      foodId: food?._id,
      food: food?.name,
      quantity: parseInt(quantity),
      price: parseInt(total),
      customerEmail: user?.email,
      customerPhone: phone,
    };
    fetch("http://localhost:4000/api/cart", {
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
    <div className="bg-[#F9FAFC] my-5">
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
      <div className="bg-[#F7C531] p-3">
        <h3 className="text-2xl font-bold text-right">Add to cart</h3>
      </div>
      <div className="m-5">
        <h2 className="font-bold">{food.name}</h2>
        <p className="my-2">{food.des}</p>
        <p className="my-2">
          <span className="text-base font-bold">Quantity: </span> {quantity}
        </p>
        <h4 className="text-xl mb-4 font-bold">
          <span className="text-base">Total Price: </span>
          <span className="font-normal text-sm">$</span>
          {total}
        </h4>
        <form onSubmit={handleCart} action="">
          <TextField
            required
            sx={{
              marginBottom: "10px",
              width: "100%",
            }}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            size="small"
            label="Phone Number"
            variant="standard"
          />
          <div className="flex flex-col lg:flex-row">
            <button
              type="submit"
              className="bg-[#F7C531] px-5 py-3 m-2 flex justify-between items-center"
            >
              <BsCartCheck className="lg:mr-3" />
              Add to Cart
            </button>
            <Link to="/checkout">
              <button className="bg-[#000] text-[#fff] px-5 py-3 m-2 flex justify-between items-center">
                <MdOutlinePayment className="lg:mr-3" />
                Proceed Payment
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCart;
