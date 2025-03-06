import { Button, Wrapper } from "./styled";

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <Wrapper>
            <Button onClick={props.toggleHideDone}>
                {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={props.setAllDone}
                disabled={props.tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </Wrapper>
    )
);

export default Buttons;