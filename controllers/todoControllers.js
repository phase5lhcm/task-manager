// GET list of all items/todos
export function getAllItems(req, res) {
    res.send('all items from file');
}

export function createTodo(req, res) {
    res.json(req.body);
}
export function getSingleTodo(req, res) {
    res.json({ id: req.params.id });
}
export function updateTodo(req, res) {
    res.send('Edit task');
}
export function deleteTodo(req, res) {
    res.send('Delete task');
}
