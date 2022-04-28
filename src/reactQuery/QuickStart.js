import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useQuery } from 'react-query';
import { getTodos, postTodo } from './my-api';


const QuickStart = () => {
    const queryClient = useQueryClient();

    const query = useQuery("todos", getTodos);

    // post 요청이 성공하면 useQuery로 매핑되어있는 todos라는 키값을 invalidate해라
    const mutation = useMutation(postTodo, {
        onSuccess: ()=>{
            queryClient.invalidateQueries("todos");
        }
    })
    if(query.isLoading) {
        return "Loading";
    }
    if(query.error) {
        return "Error..."
    }
  return (
    <div>
        <ul>
            {query.data.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
        <button onClick={() => {
            mutation.mutate({
                id: Date.now(),
                title: "Learn React-Query"
            })
        }}>
            Add Todo
        </button>
    </div>
  )
}

export default QuickStart