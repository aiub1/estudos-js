import React, {Fragment} from "react";
import Planet from "./planet";

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <Planet name="Mercúrio"
        description="O mercúrio é um elemento químico da classe dos metais pesados que pode assumir diferentes formas químicas mercúrio metálico (metal prateado líquido e volátil), mercúrio inorgânico (combinados com outros elementos, como cloro, oxigênio e enxofre) e mercúrio orgânico (combinação entre mercúrio e cadeias de carbono)."
        img_url = "http://www.ccvalg.pt/astronomia/sistema_solar/mercurio/mercurio_mariner_10.gif"
      />
      <Planet name="Plutão"
        description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
        img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/600px-Pluto_in_True_Color_-_High-Res.jpg"
      />
    </Fragment>
  )
}

export default Planets;