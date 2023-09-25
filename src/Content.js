import {useState} from 'react'
import React from 'react'
export default function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Abass rashid love for React js',
    },
    {
      id: 2,
      checked: false,
      item: 'Hard work and consistency',
    },
    {
      id: 3,
      checked: false,
      item: 'React is good library to learn',
    },
    {
      id: 4,
      checked: false,
      item: 'Javascript is mother of coding',
    },
  ])

  const handleSubmit = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? {...item, checked: !item.checked} : item,
    )
    setItems(listItem)
  }

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleSubmit(item.id)}
            />
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
