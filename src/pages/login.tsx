import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import LoginLayout from '../layouts/login';
import bg from '../images/bg-min.jpg'
import styled from 'styled-components';
import Input from '../components/form/input';
import PasswordInput from '../components/form/password';
import { Row, Col, Container } from '../components/grid'
import Button from '../components/button/button';
import Text from '../components/text/text';
import Mail from '../icons/mail';
import { AppDispatch, useAppDispatch, useAppSelector } from '../services/store';
import { login } from '../services/slices/user';

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const FormContainer = styled(Col)`
  background-color: ${({ theme }) => theme.colors.background.base};
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  flex: 0 1 500px;
  border-radius: 20px;
`;

type TFormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<TFormValues>({
    mode: 'onTouched'
  });
  const { user, isLoading } = useAppSelector((store) => ({ user: store.user.user, isLoading: store.user.isLoading }));

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <LoginLayout background={bg}>
      <Container fullWidth gutter={false}>
        <Row $end $gutter={false}>
          <FormContainer md={6}>
            <Form onSubmit={handleSubmit((data) => dispatch(login(data)))}>
              <Text variant="h3" className="mb-10">Добро пожаловать!</Text>
              <Input
                placeholder="E-mail"
                className="mb-5"
                type="email"
                icon={<Mail width="16" height="16" />}
                error={!!errors.email}
                errorText={errors?.email?.message}
                {...register('email', { required: 'Требуемое поле', pattern: { value: EMAIL_PATTERN, message: 'Должен быть корректный email' } })}
              />
              <PasswordInput
                placeholder="Пароль"
                className="mb-5"
                error={!!errors.password}
                errorText={errors?.password?.message}
                {...register('password', { required: 'Требуемое поле' })}
              />
              <Text variant="paragraph" className="mb-10 d-flex">Нет аккаунта?&nbsp;
                <Link to="/register" className="link">Регистрация</Link>
                <Link to="/forgot-password" className="link ml-auto">Забыли пароль?</Link>
              </Text>
              <Button type="submit" size="big" fullWidth loading={isLoading}>Войти</Button>
            </Form>
          </FormContainer>
        </Row>
      </Container>
    </LoginLayout>
  );
};

export default Login;
