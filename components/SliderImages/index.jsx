import { Container, LogoSerie, PosterSerie, SliderHeader } from "./styles"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SliderImages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <SliderHeader {...settings}>  
      <Container>
        <a>
          <PosterSerie src="/images/mandalore-slider.jpeg" alt="mandalore" />
          <LogoSerie src="/images/logo-mandalore.png" alt="logo mandalore"/>
        </a>
      </Container>
      <Container>
        <a>
          <PosterSerie src="/images/encanto-slider.jpeg" alt="encanto" />
          <LogoSerie src="/images/logo-encanto.png" alt="logo encanto"/>
        </a>
      </Container>
      <Container>
        <a>
          <PosterSerie src="/images/agedeglace-slider.jpeg" alt="L'age de glace" />
        </a>
      </Container>
      <Container>
        <a>
          <PosterSerie src="/images/monstre&cie-slider.jpeg" alt="monstre&cie"/>
        </a>
      </Container>
    </SliderHeader>
  )
}

export default SliderImages