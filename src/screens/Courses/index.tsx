import { Card } from "../../components/Card";
import {
  Container,
  Header,
  Empty,
  Title,
  Button,
  Separator,
  Content,
  Cards
} from "./style";

export function Courses(){
  return(
    <Container>
      <Header>
        <Content>
          <Empty />
          <Title>Cursos</Title>
          <Button>+ Adicionar</Button>
        </Content>
        <Separator />
        <Cards>
          <Card />
        </Cards>
      </Header>
    </Container>
  )
}
