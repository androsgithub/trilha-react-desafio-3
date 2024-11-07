import React from "react";
import { Header } from "../../components/Header";
import {
  Column,
  Container,
  ExtraContainer,
  SubtitleSign,
  Title,
  TitleSign,
  Wrapper,
} from "./styles";
import { Input } from "../../components/Input";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const Sign = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post(`/users`, {
        name: formData.name,
        email: formData.email,
        senha: formData.senha,
      });

      navigate("/login");
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleSign>Faça seu cadastro</TitleSign>
            <SubtitleSign>Faça seu login e make the change._</SubtitleSign>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="name"
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
                name="name"
                control={control}
              />
              {errors.fullname && <span>Nome é obrigatório</span>}
              <Input
                type="email"
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Criar conta" variant="secondary" type="submit" />
            </form>
            <ExtraContainer>
              <p>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </p>
              <p>
                Já tenho conta.{" "}
                <button className="navigate">Fazer login</button>
              </p>
            </ExtraContainer>
          </Wrapper>
        </Column>
      </Container>
    </div>
  );
};
