import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  Description,
} from './styles';

const Main = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 7.500,13</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Cocota da chatuba
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
};

export default Main;
