import { Container, ImageCompany, ItemCompany } from "./styles"

const Company = () => {
  return (
    <Container>
      <ItemCompany>
        <ImageCompany src="/images/viewers-disney.png" alt="disney" />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src="/images/viewers-pixar.png" alt="pixar" />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src="/images/viewers-marvel.png" alt="marvel" />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src="/images/viewers-starwars.png" alt="starwars" />
      </ItemCompany>
      <ItemCompany>
        <ImageCompany src="/images/viewers-national.png" alt="nationalgeo" />
      </ItemCompany>
    </Container>
  )
}

export default Company