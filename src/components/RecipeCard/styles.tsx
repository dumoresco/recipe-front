import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid transparent;
  img {
    max-width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    object-fit: cover;
  }

  :hover {
    border: 1px solid #ffa800;
  }
  .recipe-info {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header,
    footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 1rem;
      }
      span {
        font-weight: 300;
        color: #8d8282;
        margin-left: 5px;
        font-size: 0.7rem;
      }
    }

    footer {
      margin-top: 5px;
      p {
        font-size: 0.8rem;
      }
    }
  }
  .rating {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.8rem;
    color: #eeba00;
  }
`;
