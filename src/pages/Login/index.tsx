import React, { useRef, useCallback } from "react";
import { Container, Content, Background, AnimationContainer, Footer } from "./styles";

import { FiMail, FiEye } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Input from "../../components/Input";
import Button from "../../components/Button";

import logoImg from "../../assets/Logo.svg";
import heart from "../../assets/coração.svg";
import logoImg2 from "../../assets/Logo2.svg";
import { useAuth } from "../../hooks/auth";

import Checkbox from "../../components/Checkbox";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});
        const shema = Yup.object().shape({
          email: Yup.string().required("Email obrigatório").email("Digite um e-mail válido"),
          password: Yup.string().required("Senha Obrigatória"),
        });

        await shema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push("/dashboard");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [history, signIn]
  );

  return (
    <>
      <Container>
        <Background>
          <div>
            <img src={logoImg} alt="Proffy" />
            <p>Sua plataforma de estudos online</p>
          </div>
        </Background>
        <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Fazer asalogin</h1>
              <Input type="text" name="email" icon={FiMail} placeholder="E-mail" />
              <Input type="password" name="password" icon={FiEye} placeholder="Senha" />

              <Checkbox />
              <h4>Esqueci minha senha</h4>
              <Button type="submit">Entrar</Button>
            </Form>
            <Footer>
              <h3>Não tem conta?</h3>
              <a href="/cadastro"> Cadastre-se</a>

              <div>
                <h4>É de graça</h4>
                <img src={heart} alt="coração" />
              </div>
            </Footer>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
};

export default Login;
