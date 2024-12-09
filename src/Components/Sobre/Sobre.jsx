import {Section, H2, H1, P, Button, Img, Div} from "./style";

import starbucks from "../../assets/imagens/starbucks.png";

export default function Sobre () {
    return (
        <Section>
            <Div>
            <H2>PREPARAÇÃO</H2>
            <H1>Níveis de Torra</H1>
            <P>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</P>

            <Button>SAIBA MAIS</Button>
            </Div>
            <Img src={starbucks} alt="Foto Starbucks" />    
        </Section>
    )
}