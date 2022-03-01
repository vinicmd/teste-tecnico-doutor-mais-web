import { ChangeEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'

import api from '../../api/connection'
import * as S from './style'


export function NewCourse() {
  const [code, setCode] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const history = useHistory()



  function handleCodeChange(event: ChangeEvent<HTMLInputElement> ) {
    setCode(event.target.value)
  }
  function handleTitleChange(event: ChangeEvent<HTMLInputElement> ) {
    setTitle(event.target.value)
  }
  function handleDescriptionChange(event: ChangeEvent<HTMLTextAreaElement> ) {
    setDescription(event.target.value)
  }

  async function handleSubmit() {
    const data = {
      idcurso: Number(code),
      ds_titulo: title,
      ds_descricao: description
    }

    await api.post('curso', data)

    alert('Cadastro realizado com sucesso.');

    history.push('/');
  }

  return (
    <S.Container>
      <S.Header>
        <S.Content>
          <S.Empty />
          <S.Title>Novo Curso</S.Title>
          <S.Button onClick={handleSubmit}>Salvar</S.Button>
        </S.Content>
        <S.Separator />
      </S.Header>
      <S.Form>
        <S.Wrapper>
          <S.Label>Codigo</S.Label>
          <S.InputCode type='number' onChange={handleCodeChange} value={code} />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>Título</S.Label>
          <S.Input type='text' onChange={handleTitleChange} value={title} />
        </S.Wrapper>
        <S.Wrapper>
          <S.Label>Título</S.Label>
          <S.TextArea value={description}  onChange={handleDescriptionChange} />
        </S.Wrapper>
      </S.Form>
    </S.Container>
  )
}
