import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export const Title = styled.h1`
  color: #757575;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Text = styled.h1`
  color: #757575;
  font-size: 13px;
  margin-bottom: 20px;
`;

export const Link = styled.a`
  color: #75757575;
  font-size: 14px;
  margin-bottom: 20px;
  text-decoration: none;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
