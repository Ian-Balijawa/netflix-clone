import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  outline: none;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  box-sizing: border-box;

  @media (max-width: 426px) {
    max-width: 400px;
  }
  @media (max-width: 1000px) {
    border-radius: 6px;
  }
`;

export const Button = styled.button`
  display: flex;
  outline: none;
  cursor: pointer;
  align-items: center;
  height: 60px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 18px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #ff0331;
  }

  &:active {
    img {
      margin-left: 20px;
    }
    z-index: 99;
    background: #ff0000;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  @media (max-width: 1000px) {
    height: 60%;
    padding: 10px;
    font-size: 90%;
    margin-top: 10px;
    font-weight: bold;
    border-radius: 6px;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
