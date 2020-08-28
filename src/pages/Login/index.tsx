import React from "react";
import { Container, Content, Background, AnimationContainer } from "./styles";

import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Fazer slogin</h1>
        <Button type="submit">Entrar</Button>
      </Container>
    </>
  );
};

export default Login;
