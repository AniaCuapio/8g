import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Components
// import FunctionGreet from "./components/FunctionGreet";
// import ClassGreet from "./components/ClassGreet";
// import PostCard from "./components/FunctionalCard/";
// import { CardColumns } from "reactstrap";
import Clock from "./components/Clock";

//css
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Clock />
      {/* <header className="App-header">
        <FunctionGreet firstName="Ania" lastName="Cuapio" />
        <ClassGreet firstName="Ania2" lastName="Carpio" />
      </header> */}
      {/* Crear un componente funcional que renderice una Card
haciendo referencia al post de un blog
Busquen referencias de blogs y la estructura de sus posts
Tips:
- Primero abstraigan el objeto post (esto es el componente y sus props)
- Utilicen reactstrap para pimpearlo */}
      {/* <CardColumns>
        <PostCard
          imgUrl="https://www.visitarpompeya.com/wp-content/uploads/2018/01/restos-humanos-pompeya.jpg"
          title="Pompeya 1"
          subtitle="Fabio Morábito"
          body="Nos desnudamos tanto
        hasta perder el sexo
        debajo de la cama,
        nos desnudamos tanto
        que las moscas juraban
        que habíamos muerto.
        Te desnudé por dentro,
        te desquicié tan hondo
        que se extravió mi orgasmo.
        Nos desnudamos tanto
        que olíamos a quemado,
        que cien veces la lava
        volvió para escondernos."
        />
        <PostCard
          imgUrl="https://www.visitarpompeya.com/wp-content/uploads/2018/01/restos-humanos-pompeya.jpg"
          title="Pompeya 2"
          subtitle="Fabio Morábito"
          body="Me hiciste tanto daño
          con tu boca, tus dedos,
          me hacías saltar tan alto
          que yo era tu estandarte
          aunque no hubiera viento.
          Me desnudaste tanto
          que pronuncié mi nombre
          y me dolió la lengua,
          los años me dolieron.
          Nos desnudamos tanto
          que los dioses temblaron,
          que cien veces mandaron
          las lavas a escondernos."
        />
        <PostCard
          imgUrl="https://www.visitarpompeya.com/wp-content/uploads/2018/01/restos-humanos-pompeya.jpg"
          title="Pompeya 3"
          subtitle="Fabio Morábito"
          body="Te frotabas tan rápido
            los senos que dos veces
            caí en sus remolinos,
            movías el culo lento,
            en alto, para arrearme
            a su negra emboscada,
            su mediodía perenne.
            Abrías tanto su historia,
            gritaba su naufragio...
            Nos desnudamos tanto
            que no nos conocíamos,
            que los dioses mandaron
            la lava a reinventarnos."
        />
        <PostCard
          imgUrl="https://www.visitarpompeya.com/wp-content/uploads/2018/01/restos-humanos-pompeya.jpg"
          title="Pompeya 4"
          subtitle="Fabio Morábito"
          body="Te desmentí de cabo
            a rabo devolviéndote
            a tus primeros actos,
            te escudriñé profundo
            hasta escuchar la historia
            amarga de tu cuerpo,
            pues sólo el amor sabe
            cómo llegar tan hondo
            sin molestar la sangre.
            Esa noche la lava
            mudó el paisaje en piedra.
            Tú y yo fuimos lo único
            que se murió de veras."
        />
      </CardColumns> */}
    </div>
  );
}

export default App;
