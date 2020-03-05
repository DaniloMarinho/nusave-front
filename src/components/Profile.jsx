import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DataBox from './DataBox';

export const Profile = () => (
  <div>
    <DataBox type="Alimentação"/>
    <DataBox type="Assinatura e serviços"/>
    <DataBox type="Educação"/>
    <DataBox type="Saúde"/>
    <DataBox type="Roupas"/>
    <DataBox type="Viagem"/>
  </div>
);