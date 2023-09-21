import styled from '@emotion/styled';

export const StyledForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`;

export const StyledInput = styled.input`
margin-left: 15px;
padding: 5px 0px 5px 10px ;
border-radius: 4px;
border: 1px solid rgb(96, 96, 96);
  }
`;
export const FormButton = styled.button`
width: 120px;
cursor: pointer;
text-transform: uppercase;
padding: 10px 10px;
border: 1px solid rgb(102, 102, 102);
border-radius: 50px;
font-weight: 700;
background-color: rgb(201, 201, 201);
  &:focus,
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(93, 182, 37);
  }
`;

