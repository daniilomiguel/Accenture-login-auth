import React, { useMemo } from 'react';
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useAuth } from '../../hooks/contexts/AuthProvider';
import Container from '../../components/Container';
import { useHistory } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { Styled } from './styles';

// import { Container } from './styles';

function Login() {
  const { SignIn, error } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },

    onSubmit: async values => {
      alert(JSON.stringify(values, null, 2));
      await SignIn(values);
      history.push("/home");
    }
  });

  const AppError = useMemo(
    () => <Styled.Error>{error}</Styled.Error>, [error]
  );

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Image src="../../assets/img.png" rounded />
          <Form.Group className="mb-5">
            <Form.Label>Login</Form.Label>
            <Form.Control
              id="login"
              name="login"
              placeholder="Seu login"
              onChange={formik.handleChange}
            />
          </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="Sua Senha"
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
        {AppError}
      </Form>
    </Container>
  );
}

export default Login;