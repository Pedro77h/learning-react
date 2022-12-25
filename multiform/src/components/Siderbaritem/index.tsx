import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

interface Props {
  title: string
  description: string
  icon: string
  path: string
}


export const SidebarItem = ({title , description , icon , path}: Props) => {
  return (
    <S.Container>
      <Link to={path}></Link>
    </S.Container>
  )
}
