import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Ola from "../../../images/Ola.jpg";
import { MyImage } from "./styled";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Aleksandra Jurkiewicz"
            sectionContent={(
                <>
                    <MyImage src={Ola} alt="Ola" />
                    <p>Cześć! Na imię mam Ola i mam 28 lat. Mieszkam na śląsku niedaleko Katowic. Nigdy nie zajmowałam się informatyką, dlatego jest to dla mnie coś zupełnie nowego. Uwielbiam książki, gry komputerowe oraz podróże 😍
                        Do tego jestem jedną z największych fanek Harrego Pottera! 🤓👻
                    </p>
                </>
            )}
        />
    </Container>
);