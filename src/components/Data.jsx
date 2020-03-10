import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  margin: auto;
  margin-bottom: 12px;
`;

const TitleDiv = styled.div`
  font-size: 24px;
  margin: 0 0 24px 0;
  text-align: center;
`;

const FieldDiv = styled.div`
  margin: 0 0 24px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const NameDiv = styled.div`
  width: 300px;
  margin: 0 12px 0 0;
`;

const InputDiv = styled.div`
`;

const ButtonDiv = styled.div`
  text-align: right;
`;

const Button = styled.button`
  margin-right: 40px;
  width: 50px;
`;
  
export const Data = () => {

return (
  <div>
    <Container>
      <Box>
        <TitleDiv>Gastos no último mês</TitleDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com saques:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com alimentação:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com transporte:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com saúde:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com assinatura e serviços:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com educação:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com cuidados pessoais:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último mês com outros:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <ButtonDiv>
          <Button>salvar</Button>
        </ButtonDiv>
      </Box>
      <Box>
        <TitleDiv>Gastos no último ano</TitleDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com saques:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com alimentação:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com transporte:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com saúde:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com assinatura e serviços:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com educação:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com cuidados pessoais:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <FieldDiv>
          <NameDiv>Gasto no último ano com outros:</NameDiv>
          <InputDiv><input /></InputDiv>
        </FieldDiv>
        <ButtonDiv>
          <Button>salvar</Button>
        </ButtonDiv>
      </Box>
    </Container>
  </div>
);
};