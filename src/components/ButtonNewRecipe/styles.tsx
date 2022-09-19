import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 180px;
  border: 1px dashed #8d8282;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: 0.5;

  span {
    color: #8d8282;
    margin-top: 10px;
  }

  :hover {
    opacity: 1;
  }
`;
