import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Button, Wrapper } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <Wrapper>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </Wrapper>
        )
    )
};

export default Buttons;