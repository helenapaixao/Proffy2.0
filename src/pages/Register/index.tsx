import React, { useRef, useCallback } from "react";
import { Container, Content, Background, AnimationContainer } from "./styles";

import { FiMail, FiEye } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

import { useHistory } from "react-router";

import Input from "../../components/Input";
import Button from "../../components/Button";

import logoImg from "../../assets/Logo.svg";


import { useAuth } from "../../hooks/auth";


/* import { Link } from 'react-router-dom'; */
import backIcon from '../../assets/seta.svg';
interface LoginFormData {
  email: string;
  password: string;
  name: string;
  sobrenome: string;
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});
        const shema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          sobrenome: Yup.string().required("Sobrenome obrigatório"),
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
        <Content>
          <AnimationContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
            <img src={backIcon} alt="Voltar" />
           {/*  <Link to="/">
           
            </Link> */}
              <h1>Cadastro</h1>
              <p>Preencha os dados abaixo para começar.</p>
              <Input type="text" name="name" icon={FiMail} placeholder="Nome" />
              <Input type="text" name="sobrenome" icon={FiMail} placeholder="Sobrenome" />
              <Input type="email" name="email" icon={FiMail} placeholder="E-mail" />
              <Input type="password" name="password" icon={FiEye} placeholder="Senha" />

              <Button type="submit">Concluir cadastro</Button>
            </Form>
          </AnimationContainer>
        </Content>
        <Background>
          <div>
            <img src={logoImg} alt="Proffy" />
            <p>Sua plataforma de estudos online</p>
          </div>
        </Background>
      </Container>
    </>
  );
};

export default Register;
