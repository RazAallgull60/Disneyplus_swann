import { Container, ContainerImage, SliderMovie, Title } from "./styles"

import movies from "../../data/movies.json"

const Movies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  }
  return (
    <>
      <Container>
        <Title>{movies.recommandés.titre}</Title>
        <SliderMovie {...settings}>
          {movies.recommandés.films.map((item, i) => (
            <ContainerImage key={i}>
              <a>
                <img alt={"1"+i} src={item.card} />
              </a>
            </ContainerImage>
          ))}
        </SliderMovie>
      </Container>
      <Container>
        <Title>{movies.nouveau.titre}</Title>
        <SliderMovie {...settings}>
          {movies.nouveau.films.map((item, i) => (
            <ContainerImage key={i}>
              <a>
                <img alt={"2"+i} src={item.card} />
              </a>
            </ContainerImage>
          ))}
        </SliderMovie>
      </Container>
      <Container>
        <Title>{movies.originals.titre}</Title>
        <SliderMovie {...settings}>
          {movies.originals.films.map((item, i) => (
            <ContainerImage key={i}>
              <a>
                <img alt={"3"+i} src={item.card} />
              </a>
            </ContainerImage>
          ))}
        </SliderMovie>
      </Container>
    </>
  )
}

export default Movies