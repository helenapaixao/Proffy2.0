import React from "react";

import { Container } from "./styles";

const Checkbox: React.FC = () => {
  return (
    <Container>
      <input type="checkbox" name="" id="remember-me" />

      <label htmlFor="remember-me">Lembrar-me</label>
    </Container>
  );
};

export default Checkbox;
