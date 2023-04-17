import { Dispatch, SetStateAction, useEffect } from 'react'
import type { ParamsModel } from './Content'

export interface ContentProps {
  params: ParamsModel
  setParams: Dispatch<SetStateAction<ParamsModel>>
  url: string
  setUrl: Dispatch<SetStateAction<string>>
}
export default function Avatar({ params, url, setUrl }: ContentProps) {
  const { hair, skin, clothes, hair_color, bg, clothes_color } = params
  useEffect(() => {
    setUrl(
      `https://ikurotime-api-avatar-hono.deno.dev/?hair=${hair}&skin=${skin}&clothe=${clothes}&hair_color=${hair_color}&bg=${bg}&clothes_color=${clothes_color}`
    )
  }, [params])
  return (
    <div className='w-full  '>
      <img className='rounded-md' src={url} alt='Avatar image' />
    </div>
  )
}
