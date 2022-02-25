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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

export const Empty = styled.div``

export const Title = styled.h1`
  font-weight: 400;
`

export const Button = styled.button`
  font-size: 16px;

  padding: 12px 20px;
  border-width: 0;
  background-color: var(--purple);
  color: var(--text-white);

  border-radius: 5px;
`
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--text);

`
