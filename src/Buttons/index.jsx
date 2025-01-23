import "./style.css"

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="buttons">
            <button onClick={props.toggleHideDone} className="buttons__button">
                {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={props.setAllDone}
                className="buttons__button"
                disabled={props.tasks.every(({ done }) => done)}
            >Ukończ wszystkie</button>
        </div>
    )
);

export default Buttons;