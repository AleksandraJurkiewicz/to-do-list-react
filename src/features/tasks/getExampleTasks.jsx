const exampleTasksURL = "/to-do-list-react/exampleTasks.json"

export const getExampleTasks = async () => {
    const response = await fetch(exampleTasksURL);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};