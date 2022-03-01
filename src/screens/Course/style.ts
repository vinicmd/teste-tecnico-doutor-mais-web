import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  `

export const Header = styled.div`
  width: 100%;
  height: 100px;
  padding: 24px;
`

export const Content = styled.div`
  height: 75px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Empty = styled.div`
  width: 160px;
`

export const Title = styled.h1`
  font-weight: 400;
  font-size: 48px;
`

export const ButtonWrapper = styled.div`
`

export const ButtonSave = styled.button`
  font-size: 24px;

  padding: 12px 20px;
  border-width: 0;
  background-color: var(--green);
  color: var(--text-white);

  border-radius: 5px;
`

export const ButtonExclude = styled.button`
  margin-left: 12px;
  font-size: 24px;

  padding: 12px 20px;
  border-width: 0;
  background-color: var(--red);
  color: var(--text-white);

  border-radius: 5px;
`

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--grey);
`

export const Form = styled.div`
  max-width: 1000px;
  padding: 24px;
  margin: 50px auto;

  border: 2px solid var(--grey);
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Label = styled.label`
  font-size: 16px;
`

export const Input = styled.input`
  border: 2px solid var(--grey-light);
  padding: 10px;
  font-size: 16px;
`

export const InputCode = styled.input`
  max-width: 150px;
  border: 2px solid var(--grey-light);
  padding: 10px;
  font-size: 16px;
  ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`

export const TextArea = styled.textarea`
  border: 2px solid var(--grey-light);
  padding: 10px;
  font-size: 16px;
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const ModalTitle = styled.h1`
  padding-top: 12px;
  font-size: 36px;
  font-weight: 400;
  color: var(--text);
  text-align: center;
`

export const ModalText = styled.p`
  padding: 48px 0;
  font-size: 24px;
  font-weight: 400;
  color: var(--text);
  text-align: center;
`

export const Buttons = styled.div`
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ButtonCancel = styled.button`
  margin-left: 12px;
  font-size: 24px;

  padding: 12px 20px;
  border-width: 0;
  background-color: var(--blue);
  color: var(--text-white);

  border-radius: 5px;
`

export const ButtonConfirm = styled.button`
  margin-left: 12px;
  font-size: 24px;

  padding: 12px 20px;
  border-width: 0;
  background-color: var(--green);
  color: var(--text-white);

  border-radius: 5px;
`
