import { Content, Header, Wrapper } from "./styled";

const Section = ({ title, sectionContent, extraHeaderContent }) => (
    <Wrapper>
        <Header>{title}
            {extraHeaderContent}
        </Header>
        <Content>
            {sectionContent}
        </Content>
    </Wrapper>
);

export default Section;