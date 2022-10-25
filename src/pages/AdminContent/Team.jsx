import React from 'react'

const teams =[
  {
    id: 1,
    name: 'thiasdas',
    tasks: [{id: 1, description: 'asdasdasdad', inProgress: true }]
  },
  {
    id: 2,
    name: 'thiasdas',
    tasks: [{id: 2, description: 'asdasdasdad', inProgress: true }]
  },
  {
    id: 3,
    name: 'thiasdas',
    tasks: [{id: 3, description: 'asdasdasdad', inProgress: true }]
  }
]

export default function Team() {
  return (
    <table className='w-full'>
      <thead className='shadow h-[45px] border text-center '>
        <td >
          Nome
        </td>
        <td>
          Enviar tarefa
        </td>
        <td>
          Ver tarefas
        </td>
        <td>
          Enviar Mensagem
        </td>
      </thead>
    </table>
  )
}
