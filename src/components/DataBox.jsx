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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
`;

export const ShowMoreButton = styled(Button)`
  text-align: center;
  font-size: 14px;
  height: 24px;
  width: 150px;
  padding: 1px;
  margin-right: 15px;
`;

const data = [
  {
    name: '200-500', uv: 4000,
  },
  {
    name: '500-700', uv: 3000,
  },
  {
    name: '700-900', uv: 2000,
  },
  {
    name: '>900', uv: 2780,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ClosedDataBox = ({type, onOpen}) => {

    return (
      <DataBoxContainer>
      <DataBoxHeader>
          <div style={{ margin: '0 5px 0 5px' }}>
            <FoodIcon color="primary"/>
          </div>
          <DataBoxName> {type} </DataBoxName>
          <ShowMoreButton color="primary" onClick={()=>onOpen()} >Mostrar mais</ShowMoreButton>
      </DataBoxHeader>
      <DataBoxBody>
          <div>
            closed
          </div>
      </DataBoxBody>
      </DataBoxContainer>
    );
  };

const OpenDataBox = ({type, onClose}) => {

  return (
    <DataBoxContainer>
    <DataBoxHeader>
        <div style={{ margin: '0 5px 0 5px' }}>
          <FoodIcon color="primary"/>
        </div>
        <DataBoxName> {type} </DataBoxName>
        <ShowMoreButton color="primary" onClick={()=>onClose()} >Ocultar</ShowMoreButton>
    </DataBoxHeader>
    <DataBoxBody>
      <BarChart width={200} height={200} data={data}>
        <Bar dataKey="uv" >
          {
            data.map((entry, index) => (
              <Cell fill={COLORS[index]} key={`cell-${index}`} />
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