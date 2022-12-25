import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as BookIcon } from "../../assets/book.svg";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";

interface Props {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

export const SidebarItem = ({ title, description, icon, path , active }: Props) => {
  return (
    <S.Container>
      <Link to={path}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        <S.IconArea active={active}>
          {icon === "profile" &&
            <ProfileIcon fill="white" width={24} height={24} />
          }
          
          {icon === "book" && <BookIcon fill="white" width={24} height={24} />}
          
          {icon === "mail" && 
            <MailIcon fill="white" width={24} height={24} />}
        </S.IconArea>
        <S.Point active={active} />
      </Link>
    </S.Container>
  );
};
