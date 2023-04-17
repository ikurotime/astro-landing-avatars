import { useState } from 'react'
import Avatar from './Avatar'
import CopyIcon from './Icons/CopyIcon'
import Inputs from './Inputs'
export interface ParamsModel {
  hair: string
  skin: string
  clothes: string
  hair_color: string
  bg: string
  clothes_color: string
}
export default function Content() {
  const [params, setParams] = useState<ParamsModel>({
    hair: '1',
    skin: '1',
    clothes: '1',
    hair_color: '1',
    bg: '0',
    clothes_color: '1'
  })
  const copyUrl = () => {
    navigator.clipboard.writeText(url)
  }
  const [url, setUrl] = useState<string>('')
  const defaultProps = {
    params,
    setParams,
    url,
    setUrl
  }
  return (
    <>
      <div className='flex w-full'>
        <Inputs {...defaultProps} />
        <Avatar {...defaultProps} />
      </div>

      <p className='p-5 relative text-white bg-zinc-800 border-2  rounded  border-zinc-900 mt-8'>
        url: {url}
        <CopyIcon onClick={copyUrl} />
      </p>
    </>
  )
}
