import React from "react";
import { Container } from "./style";
import { saidbar } from "../../utilst/saidbar";
import { NavLink } from "react-router-dom";

const Sidbar = () => {
  return (
    <Container>
      {saidbar.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={item.path}
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "black",
              };
            }}
          >
            {item.title}
          </NavLink>
        );
      })}
    </Container>
  );
};

export default Sidbar;
