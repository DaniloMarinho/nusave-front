import React, { useState, useEffect, PureComponent } from 'react';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FoodIcon from '@material-ui/icons/Restaurant';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export const DataBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 6% 24px 6%;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 4px 4px 16px 4px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.10);
  background-color: white;
`;

export const DataBoxHeader = styled.div`
  width: 100%;
  display: flex;
  margin: 8px;
`;

export const DataBoxBody = styled.div`
  
`;

export const DataBoxName = styled.div`
  width: 100%;
  margin: 4px 0 0 4px;
  font-weight: bold;
  font-size: 18px;
  font-family: "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", sans-serif;
  color: #404040;
`;

/*export const ShowMoreButton = styled(Button)`
  text-align: center;
  font-size: 14px;
  border: 1px solid #81259D;
  height: 24px;
  width: 150px;
  padding: 1px;
  margin-right: 15px;
`;*/

const ShowMoreButton = styled.button`
  text-align: center;
  font-size: 14px;
  border: 1px solid #81259D;
  border-radius: 7px;
  height: 24px;
  width: 110px;
  padding: 1px;
  margin: 4px 15px 0 0;
  color: #81259D;
  background-color: white;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
    background-color: #81259D;
  }
`;

const FilterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 18px;
  font-family: "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", sans-serif;
  color: #404040;
`;

const SelectDiv = styled.div`
  margin: 0 18px 0 18px;
`;

const data = [
  { name: '0-25%', media: 2000 },
  { name: '25%-50%', media: 2500 },
  { name: '50%-75%', media: 2780 },
  { name: '75%-100%', media: 4000 },
];

const COLORS = ['#ADD8E6', '#82CAFA', '#1589FF', '#2B65EC'];

const ClosedDataBox = ({type, onOpen}) => {

  return (
    <DataBoxContainer>
    <DataBoxHeader>
        <div style={{ margin: '0 5px 0 5px' }}>
          
        </div>
        <DataBoxName> {type} </DataBoxName>
        <ShowMoreButton color="primary" onClick={()=>onOpen()} >Mostrar mais</ShowMoreButton>
    </DataBoxHeader>
    <DataBoxBody>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 16, right: 24, left: 0, bottom: 8,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="media" fill="#8884d8" >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]}/>
              ))
            }
        </Bar>
      </BarChart>
    </DataBoxBody>
    <div style={{margin:'6px 0 0 0', color:'#1589FF', width:'100%', textAlign:'center'}}>
      Distribuição de gastos em reais, baseada na sua faixa de renda, localização, idade e sexo</div>
    </DataBoxContainer>
  );
};

const OpenDataBox = ({type, onClose}) => {

  return (
    <DataBoxContainer>
    <DataBoxHeader>
        <div style={{ margin: '0 5px 0 5px' }}>
          
        </div>
        <DataBoxName> {type} </DataBoxName>
        <ShowMoreButton color="primary" onClick={()=>onClose()} >Mostrar menos</ShowMoreButton>
    </DataBoxHeader>
    <DataBoxBody>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 16, right: 24, left: 0, bottom: 8,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="media" fill="#8884d8" >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]}/>
              ))
            }
        </Bar>
      </BarChart>
      <FilterDiv>
        <SelectDiv>
          <Select color="#1589FF" label="Classe econômica" value="A">
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="D">D</MenuItem>
          </Select>
        </SelectDiv>
        <SelectDiv>
          <Select label="Localização" value="SP">
            <MenuItem value="SP">SP</MenuItem>
            <MenuItem value="RJ">RJ</MenuItem>
            <MenuItem value="BH">BH</MenuItem>
            <MenuItem value="DF">DF</MenuItem>
          </Select>
        </SelectDiv>
        <SelectDiv>
          <Select label="Faixa etária" value="18-30">
            <MenuItem value="18-30">18-30</MenuItem>
            <MenuItem value="30-40">30-40</MenuItem>
            <MenuItem value="40-50">40-50</MenuItem>
            <MenuItem value="50-60">50-60</MenuItem>
          </Select>
        </SelectDiv>
        <SelectDiv>
          <Select label="Sexo" value="Masculino">
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Feminino">Feminino</MenuItem>
          </Select>
        </SelectDiv>
      </FilterDiv>
    </DataBoxBody>
    <div style={{margin:'12px 0 0 0', color:'#1589FF', width:'100%', textAlign:'center'}}>
      Abaixo serão adicionados dados e dicas sobre a forma como as pessoas gastam para economizar no setor</div>
    </DataBoxContainer>
  );
};

const DataBox = ({type}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    isOpen ? <OpenDataBox type = {type} onClose = {()=>{setOpen(false)}} /> :
    <ClosedDataBox type = {type} onOpen = {()=>{setOpen(true)}} />
  );
};

export default DataBox;