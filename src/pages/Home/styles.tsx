import styled from "styled-components";

import arrowDown from "../../assets/select-arrow-down.png";

export const Container = styled.div`
  max-width: 1100px;
  padding: 20px;
  margin: 0 auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .total-recipes {
      font-size: 1.2rem;
      color: #8d8282;
    }

    .filter-container input,
    select {
      background-color: #dedede;
      border: 1px solid #a4a0a0;
      border-radius: 2px;
      color: #474747;
      height: 35px;
    }

    input::placeholder {
      font-size: 0.8rem;
    }

    select {
      background: url(arrowDown) no-repeat center right #dedede;

      color: #474747c0;
      padding-right: 20px;
    }

    input {
      padding: 0 15px;
      margin-right: 15px;
    }
  }

  .recipes {
    margin-top: 50px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
