import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import FoodIcon from '@material-ui/icons/Restaurant';

export const DataBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 48px 24px 48px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 3px 0;
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
        <div>
          <p>open</p>
          <p>open</p>
          <p>open</p>
        </div>
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