import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Input = styled.input`
  background: #333;
  color: white;
  border-radius: 6px;
  border: 0;
  outline: 0;
  box-shadow: 0 0 5rem #000;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  min-height: 600px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Submit = styled.button`
  border-radius: 60px;
  color: white;
  border: 0;
  background: #e50914;
  box-shadow: 0 0 1rem #e50914;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  cursor: pointer;
  padding: 16px;
  outline: 0;

  &:disabled {
    opacity: 0.1;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #737373;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-transform: underline;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Error = styled.div`
  background: #e87c03;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
  border-radius: 4px;
`;
