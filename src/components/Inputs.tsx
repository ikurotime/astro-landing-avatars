import { useEffect } from 'react'
import type { ContentProps } from './Avatar'

export default function Inputs({ params, setParams }: ContentProps) {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeout(() => {
      const { name, value } = e.target
      if (name === 'hair_color' || name === 'clothes_color') {
        setParams((prev) => ({ ...prev, [name]: value.replace('#', '') }))
        return
      }
      setParams((prev) => ({ ...prev, [name]: value }))
    }, 500)
  }
  useEffect(() => {
    console.log(params)
  }, [params])
  return (
    <div className='flex w-full flex-col gap-3 p-10'>
      <select className='input' name='hair' id='hair' onChange={handleOnChange}>
        <option value='1'>Hair 1</option>
        <option value='2'>Hair 2</option>
        <option value='3'>Hair 3</option>
      </select>
      <select className='input' name='skin' id='Skin' onChange={handleOnChange}>
        <option value='1'>Skin 1</option>
        <option value='2'>Skin 2</option>
        <option value='3'>Skin 3</option>
      </select>
      <select
        className='input'
        name='clothes'
        id='clothe'
        onChange={handleOnChange}
      >
        <option value='1'>clothes 1</option>
        <option value='2'>clothes 2</option>
        <option value='3'>clothes 3</option>
      </select>
      <input
        className='input h-10'
        name='hair_color'
        id='hair_color'
        type='color'
        onChange={handleOnChange}
      />
      <input
        className='input h-10'
        name='clothes_color'
        id='bg'
        type='color'
        onChange={handleOnChange}
      />
    </div>
  )
}
