import React, { useState, useEffect, PureComponent } from 'react';
import styled from 'styled-components';
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
  padding: 4px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.10);
  background-color: white;
`;

export const DataBoxHeader = styled.div`
  width: 100%;
  display: flex;
  margin: 8px;
`;

export const DataBoxBody = styled.div`
  display: flex;
  margin: 0 16px 16px 16px;
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

export const ShowMoreButton = styled.button`
  text-align: center;
  font-size: 14px;
  border: 1px solid #81259D;
  border-radius: 7px;
  height: 24px;
  width: 110px;
  padding: 1px;
  margin-right: 15px;
  color: #81259D;
  background-color: white;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
    background-color: #81259D;
  }
`;

const data = [
  { name: '200-500', value: 4000 },
  { name: '500-700', value: 3000 },
  { name: '700-900', value: 2000 },
  { name: '>900', value: 2780 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ClosedDataBox = ({type, onOpen}) => {

    return (
      <DataBoxContainer>
      <DataBoxHeader>
          <div style={{ margin: '0 5px 0 5px' }}>
            
          </div>
          <DataBoxName> {type} </DataBoxName>
          <ShowMoreButton color="primary" onClick={()=>onOpen()} >Mostrar mais</ShowMoreButton>
      </DataBoxHeader>
      <DataBoxBody />
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
        <ShowMoreButton color="primary" onClick={()=>onClose()} >Ocultar</ShowMoreButton>
    </DataBoxHeader>
    <DataBoxBody>
      <BarChart width={200} height={200} data={data}>
        <Bar dataKey='value' >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} label/>
            ))
          }
        </Bar>
        <Legend />
      </BarChart>
    </DataBoxBody>
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