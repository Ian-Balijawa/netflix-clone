import React from 'react';
import {
  Inner,
  Container,
  Pane,
  Title,
  Image,
  SubTitle,
  Item,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  );
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children} </Pane>;
};

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronSubTitle({ ...restProps }) {
  return <Image {...restProps} />;
};
