import { useState } from "react";
import { MainStyle, Copo, Section, Button, Ul, H2, Span, P } from "./style";

import amarelopequeno from "../../assets/imagens/amarelopequeno.png";
import vermelhopequeno from "../../assets/imagens/vermelhopequeno.png";
import laranjapequeno from "../../assets/imagens/laranjapequeno.png";
import Copolaranjagrande from "../../assets/imagens/Copolaranjagrande.png";
import Copoamarelogrande from "../../assets/imagens/Copoamarelogrande.png";
import Copovermelhogrande from "../../assets/imagens/Copovermelhogrande.png";
import Ellipseverde from "../../assets/imagens/Ellipseverde.png";
import Ellipseamarelo from "../../assets/imagens/Ellipseamarelo.png";
import Ellipsevermelho from "../../assets/imagens/Ellipsevermelho.png";

export default function Home() {
  
  const [copoSelecionado, setCompoSelecionado] = useState(Copolaranjagrande);
  const [corDeFundo, setCorDeFundo] = useState(Ellipseverde);

  
  const trocandoCopo = (imagemCopo, imagemFundo) => {
    setCompoSelecionado(imagemCopo); 
    setCorDeFundo(imagemFundo);  
  };

  return (
    <MainStyle>
      <section>
        <H2>Mais que Café Isso é <Span>Starbucks</Span>
        </H2>
        <P>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
          dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
          Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
          bebidas quentes e frias, doces diferenciados e sanduíches.
        </P>
        <Button>SAIBA MAIS</Button> 
        <Ul>
          
          <img
            src={amarelopequeno}
            alt="copo pequeno amarelo"
            onClick={() =>
              trocandoCopo(Copoamarelogrande, Ellipseamarelo)  
            }
          />
          <img
            src={vermelhopequeno}
            alt="copo pequeno vermelho"
            onClick={() =>
              trocandoCopo(Copovermelhogrande, Ellipsevermelho)  
            }
          />
          <img
            src={laranjapequeno}
            alt="copo pequeno laranja"
            onClick={() =>
              trocandoCopo(Copolaranjagrande, Ellipseverde)  
            }
          />
        </Ul>
      </section>

      <Section>
        <Copo src={copoSelecionado} alt="Copo Selecionado" />
        <img src={corDeFundo} alt="Fundo" />
      </Section>
    </MainStyle>
  );
}
