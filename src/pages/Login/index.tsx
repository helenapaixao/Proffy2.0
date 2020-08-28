import React,{useRef,useCallback} from "react";
import { Container, Content, Background, AnimationContainer } from "./styles";

import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from '../../utils/getValidationErrors';

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from '../../assets/Logo.svg';
import { useAuth } from '../../hooks/auth';

interface LoginFormData {
    email:string;
    password: string;
}


const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { signIn } = useAuth();
    const history = useHistory();


    const handleSubmit = useCallback(
        async (data:LoginFormData) => {
            try {
                formRef.current?.setErrors({});
                const shema = Yup.object().shape({
                    email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
                    password: Yup.string().required('Senha Obrigatória'),
                })

                await shema.validate(data, {
                    abortEarly:false,
                })

                await signIn({
                    email:data.email,
                    password:data.password,
                });
                history.push('/dashboard');


            } catch (err) {
                if(err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                    return;
                }
            }
        },
        [history, signIn],
    )

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
