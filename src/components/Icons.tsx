import GithubIcon from './Icons/GithubIcon'
import TwitterIcon from './Icons/TwitterIcon'

type Props = {
  name: 'twitter' | 'github' | 'youtube' | 'discord' | 'linkedin'
}
interface IconModel {
  [key: string]: JSX.Element
}
const icons: IconModel = {
  twitter: <TwitterIcon />,
  github: <GithubIcon />
}
export default function Icons({ name }: Props) {
  return (
    <div className='rounded-full flex justify-center items-center  w-9 h-9 '>
      {icons[name]}
    </div>
  )
}
