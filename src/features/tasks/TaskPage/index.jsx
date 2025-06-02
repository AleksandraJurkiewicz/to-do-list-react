import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector((state) => selectTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie ma takiego zadania"}
                sectionContent={!!task && (
                    <>
                        <strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}
                    </>
                )}
            />
        </Container>
    )
}

export default TaskPage;