import { ChangeEvent, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../api/connection'
import * as S from './style'

interface CoursesParams {
  id: string
}

Modal.setAppElement('#root')

export function Course() {
  const [code, setCode] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [isExcludeModalOpen, setIsCloseModalOpen] = useState(false)

  function handleOpenExcludeModal() {
    setIsCloseModalOpen(true)
  }

  function handleCloseExcludeModal() {
    setIsCloseModalOpen(false)
  }

  const history = useHistory()
  const params = useParams<CoursesParams>()

  useEffect(() => {
    api.get(`curso/${params.id}`).then(response => {
      setCode(response.data.idcurso)
      setTitle(response.data.ds_titulo)
      setDescription(response.data.ds_descricao)
    })
  }, [])

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
    if(!code || !title || !description){
      return alert('Não é possível salvar com dado em branco.')
    }
    const data = {
      idcurso: Number(code),
      ds_titulo: title,
      ds_descricao: description
    }

    await api.put(`curso/${params.id}`, data)

    alert('Cadastro atualizado com sucesso.')

    history.push('/')
  }

  function handleConfirmExclude() {
    api.delete(`curso/${params.id}`)


    history.push('/')
  }

  return (
    <S.Container>
      <S.Header>
        <S.Content>
          <S.Empty />
          <S.Title>Alterar Curso</S.Title>
          <S.ButtonWrapper>
            <S.ButtonSave onClick={handleSubmit} >Salvar</S.ButtonSave>
            <S.ButtonExclude onClick={handleOpenExcludeModal} >Excluir</S.ButtonExclude>
          </S.ButtonWrapper>
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
      <Modal
        isOpen={isExcludeModalOpen}
        onRequestClose={handleCloseExcludeModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'

      >
        <S.ModalContainer>
          <S.ModalTitle>Confirma a Exclusão?</S.ModalTitle>
          <S.ModalText>Deseja remover o registro {title}? </S.ModalText>
          <S.Separator />
          <S.Buttons>
            <S.ButtonCancel onClick={handleCloseExcludeModal} >Cancelar</S.ButtonCancel>
            <S.ButtonConfirm onClick={handleConfirmExclude} >Confirmar</S.ButtonConfirm>
          </S.Buttons>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  )
}
