import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PostCard from "../PostCard/index";

const posts = [
  {
    author: "codigioVIS",
    createdAt: "2020-06-22T00:16:26.759Z",
    imgUrl:
      "https://media.istockphoto.com/vectors/neon-glowing-techno-lines-hitech-futuristic-abstract-background-with-vector-id990833128",
    text:
      "It surprised me when my husband, Michael, an American, started to feel exhausted listening to tales of racism in my life as well as various run-ins with same in New York City. What do you do when your partner seems out of sync with a core part of yourself? I have been an active participant in trying to right society’s wrongs: fighting against the marginalization of the Palestinians, working to get out the vote in black communities and, as a judge in Haiti, refusing to accept the institutionalized discrimination against people without means. So, I initially tried to be patient with him, forcing myself not to scoff or roll my eyes at his Pollyanna-ish views but, after a while, the truth was undeniable: I was getting sick and tired of my husband’s so-called racism fatigue.\nHe said that I attributed virtually everything to racism. If I got a bagel with less butter than his, he said I would cry racism. OK, that’s a bit of an exaggeration, but he said that I suspected racism so often that he had the nerve to tell me that I reminded him of Woody Allen’s character in Annie Hall who was paranoid about seeing anti-Semitism at every turn.\nFor a long time, he tried hard to show me that not everything is attributable to racism. He reached for more benevolent interpretations of events and interactions so much so that I became his polar opposite: just as I virtually saw racism everywhere in our society, he wound up attributing nothing to it. You can imagine how awkward this felt, especially because my skills as an attorney made winning an argument rather easy. His “brilliant” strategy of passively listening to me, minimally responding didn’t seem to be working. I would continually press him, asking him what he thought, didn’t he agree with me, and so on. After pitifully witnessing his feeble attempts to appear interested, I sometimes would accuse him of being a racist. He knew I didn’t exactly mean it but it hurt him nonetheless.",
    title: "How I Dealt With My White Husband’s “Racism Fatigue”",
  },
  {
    author: "Pete Gamlen",
    createdAt: "2020-06-22T05:22:23.580Z",
    imgUrl:
      "https://static01.nyt.com/images/2020/06/22/travel/22creating-a-family-pod02-trv-inyt/08-Creating-a-family-pod-jumbo.jpg?quality=90&auto=webp",
    subtitle: "recent",
    text:
      "A Dioselina Lamus le pareció “un oasis en medio de tanta noticia”. A Juan José Camargo le hizo recordar los canarios que había en la casa donde creció. Sonia Sánchez estaba teniendo un mal día y “escuchar el canto de las aves no solo me tranquilizó”, nos contó. “También reí por la reacción de mi gata que se emocionó, no sabía de dónde procedía ese canto”.\n¿Llevamos la conversación a otra parte? Hemos empezado a habilitar, por tiempo limitado, los comentarios en español en nuestros artículos. Busca el botón en el extremo derecho de la línea donde está la fecha de publicación de cada nota y participa. El registro es gratuito.\nAl menos temporalmente nos hemos tenido que despedir de la mayor parte de los besos, los abrazos, las cercanías, por no hablar de los viajes. Nuestro órgano más extenso, nuestros dos metros cuadrados de piel, sufren su propio confinamiento. Sentimos, por extensión, la inutilidad social de las manos. Las vacaciones y el turismo se debaten entre la congelación y la mutación. ¿Cómo dolernos por esa ausencia de tactos? ¿Cómo aceptar esa separación de una parte importante de nosotros mismos? ¿Cómo digerir tantos cambios inesperados y profundos en nuestras vidas?\n\nPodemos encontrar claves para ello en la obra de la propia Rachel Cusk y en otras narrativas que han abordado en los últimos años la vida posterior a la ruptura de una pareja, que es la forma más extendida del duelo.\nTal vez el primer tramo de todo divorcio consista en la renuncia a una piel que durante un tiempo ha sido casi propia y de pronto se vuelve ajena. Después llegan las otras etapas, no siempre en el mismo orden: negación, ira, negociación, tristeza, aceptación, el necesario olvido. Aunque no todos vayamos a experimentarlas en este dilatado presente pandémico, importa recordarlas ahora, cuando el deber de los gobiernos es diseñar fases de lo que han dado en llamar desescalada, mientras que el nuestro es hacerlas negociar con nuestras propias etapas personales, familiares y colectivas, para que el duelo por los muertos se complete con el duelo por todo lo demás que estamos perdiendo.\nEsa va a ser la tendencia general en los próximos meses: la creación de una ilusión óptica colectiva de avance económico, social y anímico. Ante ese supuesto consenso, nuestra mirada puede coincidir o discrepar.\n\nComo escribió Cusk en A contraluz: “La realidad podría describirse como el eterno equilibrio entre positivo y negativo”. Un equilibrio siempre precario, como el que intentan alcanzar la política y la literatura o la psicología positiva y la realidad psicológica en el interior de cada uno de nosotros.",
    title: "¿Vives en una burbuja?",
  },
];
class Layout extends Component {
  render() {
    const allPosts = posts.map(({ imgUrl, title, section, text }) => (
      <Col lg="6">
        <PostCard
          imgUrl={imgUrl}
          title={title}
          subtitle={section}
          body={text}
        ></PostCard>
      </Col>
    ));

    return (
      <Container>
        <Row>{allPosts}</Row>
      </Container>
    );
  }
}

export default Layout;
