import {Section, Button, H1, H2, P,Img} from "./style";

import cafe from "../../assets/imagens/cafe.png";


export default function Novidades() {
    return (
            <Section>
            <H2>PREPARAÇÃO</H2>
            <H1>Níveis de Torra</H1>
            <P>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</P>
            <Button>SAIBA MAIS</Button>
            <Img src={cafe} alt="Imagem de grão de café" />
            </Section>   
    )
}