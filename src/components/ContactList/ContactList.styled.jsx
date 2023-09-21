import styled from '@emotion/styled';
import { FaTrash } from 'react-icons/fa';
export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const Item = styled.li`
display: flex;
justify-content: space-between;
color: black;
font-weight: 600;
`;

export const ContactName = styled.p`
  margin: 0px;
`;

export const DeleteButton = styled.button`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  
`;

export const DeleteIcon = styled(FaTrash)`
  width: 25px;
  height: 25px;
  &:hover,
  &:focus {
    color: red;
  }
`;
