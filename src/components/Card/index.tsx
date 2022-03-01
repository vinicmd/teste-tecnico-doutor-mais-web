import * as S from './style'

interface CoursesProps {
  idcurso: number
  ds_titulo: string
  ds_descricao: string
}
export function Card({idcurso, ds_titulo, ds_descricao}: CoursesProps){
  return (
    <S.Container>
      <S.Code>{idcurso}</S.Code>
      <S.Title>{ds_titulo}</S.Title>
      <S.DescriptionWrapper>
        <S.Description>{ds_descricao}</S.Description>
      </S.DescriptionWrapper>
    </S.Container>
  )
}
