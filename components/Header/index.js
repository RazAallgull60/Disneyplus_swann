import Image from "next/image"
import {
  Container,
  Avatar,
  ContainerIcons,
  Wrapper,
  ItemIcon,
  TextIcon,
  ContainerUser,
  TextName,
} from "./styles"

import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai"
import { FiFilm } from "react-icons/fi"
import { RiComputerFill } from "react-icons/ri"

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="/images/logo.svg" alt="logo" width={80} height={48} />

        <ContainerIcons>
          <ItemIcon>
            <AiFillHome />
            <TextIcon>Accueil</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiOutlineSearch />
            <TextIcon>Recherche</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiOutlinePlus />
            <TextIcon>Ma liste</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <AiFillStar />
            <TextIcon>Originals</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <FiFilm />
            <TextIcon>Films</TextIcon>
          </ItemIcon>
          <ItemIcon>
            <RiComputerFill />
            <TextIcon>Séries</TextIcon>
          </ItemIcon>
        </ContainerIcons>
      </Wrapper>
      <ContainerUser>
        <TextName>Swann</TextName>
        <Avatar src="/images/profile.jpg" alt="profile" width={48} height={48} />
      </ContainerUser>
    </Container>
  )
}

export default Header