import { rest } from "msw";

const todos = [
    {
        id: `1`,
        title: `jimmy 1`,
    },
    {
        id: `2`,
        title: `jimmy 2`,
    },
    {
        id: `3`,
        title: `jimmy 3`,
    },
    {
        id: `4`,
        title: `jimmy 4`,
    },
    {
        id: `5`,
        title: `jimmy 5`,
    },
]

export const handlers = [
    rest.post("http://localhost:3000/api/todo", async(req, res ,ctx) => {
        const {todo} = req.body;
        console.log(JSON.stringify(todo));
        todos.push(todo)
        return res(ctx.json(true));
    }),
    
    rest.get("http://localhost:3000/api/todos", async (req,res,ctx) => {
        return res(ctx.json(todos));
    })
]