import {
  Container,
  Header,
  Empty,
  Title,
  Button,
  Separator,
  Content,
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
      </Header>
    </Container>
  )
}
