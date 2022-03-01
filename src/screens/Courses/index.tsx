import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/connection";
import { Card } from "../../components/Card";
import * as S from "./style";

export interface CoursesProps {
  idcurso: number
  ds_titulo: string
  ds_descricao: string
}

export function Courses(){
  const [courses, setcourses]  = useState<CoursesProps[]>([])


  useEffect( () => {
    api.get('curso').then(response => {
      setcourses(response.data)
    })
  }, [])

  return(
    <S.Container>
      <S.Header>
        <S.Content>
          <S.Empty />
          <S.Title>Cursos</S.Title>
          <Link to='/curso/novo' >
            <S.Button>+ Adicionar</S.Button>
          </Link>
        </S.Content>
        <S.Separator />
        <S.Cards>
          {courses.map((course) => {
            return (
              <S.NavLink key={course.idcurso} to={`/curso/${course.idcurso}` }>

                <Card
                  ds_descricao={course.ds_descricao}
                  idcurso={course.idcurso}
                  ds_titulo={course.ds_titulo}
                />
              </S.NavLink>
            )
          })}
        </S.Cards>
      </S.Header>
    </S.Container>
  )
}
