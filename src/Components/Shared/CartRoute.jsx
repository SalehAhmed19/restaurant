import { Badge, IconButton } from "@mui/material";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const CartRoute = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  return (
    <Link to="/cart">
      <div className="lg:h-14 h-7 lg:w-14 w-7 bg-[#F2F3F5] flex justify-center items-center rounded-full">
        <IconButton
          className="lg:h-14 h-7 lg:w-14 w-7 bg-[#F2F3F5] flex justify-center items-center rounded-full"
          aria-label="cart"
        >
          <StyledBadge badgeContent={4} color="secondary">
            <AiOutlineShopping />
          </StyledBadge>
        </IconButton>
      </div>
    </Link>
  );
};

export default CartRoute;