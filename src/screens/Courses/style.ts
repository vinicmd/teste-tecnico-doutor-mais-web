import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

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

export const Button = styled.button`
  font-size: 24px;

  padding: 12px 20px;
  border-width: 0;
  background-color: var(--purple);
  color: var(--text-white);

  border-radius: 5px;
`
export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--grey);
`

export const Cards = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;

  @media (max-width: 1100px){
    max-width: 765px;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text);
`
