import { useState } from 'react'

const Home: React.FC = () => {
	const [todoText, setTodoText] = useState<string>('')
	const [todos, setTodos] = useState<string[]>([])

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const trimmedText = todoText.trim()
			if (trimmedText !== '') {
				addTodoItem(trimmedText)
				setTodoText('')
			}
		}
	}

	const toggleTodoCompletion = (index: number) => {
		const newTodos = [...todos]
		newTodos[index] = newTodos[index] ? '' : 'done'
		setTodos(newTodos)
	}

	const addTodoItem = (todoText: string) => {
		setTodos([...todos, todoText])
	}

	return (
		<div className='bg-gray-100 p-8'>
			<div className='max-w-md mx-auto bg-white rounded shadow-md p-4'>
				<h1 className='text-lg font-bold mb-4'>To-Do List</h1>
				<input
					type='text'
					className='w-full border rounded px-2 py-1 mb-4'
					placeholder='Add new item'
					value={todoText}
					onChange={(e) => setTodoText(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
				<ul className='list-disc pl-8'>
					{todos.map((todo, index) => (
						<li
							key={index}
							className={`cursor-pointer hover:opacity-75 py-1 ${todos[index]}`}
							onClick={() => toggleTodoCompletion(index)}
						>
							{todo}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Home
