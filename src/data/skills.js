import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaMobileAlt } from 'react-icons/fa'
import { SiVite, SiTailwindcss, SiReactrouter } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { MdAccountTree } from 'react-icons/md'
import { VscVscode } from 'react-icons/vsc'

export const skills = [
  { name: 'HTML5', icon: FaHtml5, level: 'Core', color: '#E44D26' },
  { name: 'CSS3', icon: FaCss3Alt, level: 'Core', color: '#2965F1' },
  { name: 'JavaScript', icon: FaJs, level: 'Core', color: '#D7B740' },
  { name: 'React', icon: FaReact, level: 'Core', color: '#149ECA' },
  { name: 'Vite', icon: SiVite, level: 'Tooling', color: '#B043FF' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Core', color: '#0EA5C0' },
  { name: 'React Router', icon: SiReactrouter, level: 'Core', color: '#CA4245' },
  { name: 'Context API', icon: MdAccountTree, level: 'State', color: '#3355FF' },
  { name: 'Git', icon: FaGitAlt, level: 'Tooling', color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, level: 'Tooling', color: '#0B0F19' },
  { name: 'Responsive Design', icon: FaMobileAlt, level: 'Practice', color: '#00A87E' },
  { name: 'REST API', icon: TbApi, level: 'Basics', color: '#3355FF' },
  { name: 'VS Code', icon: VscVscode, level: 'Tooling', color: '#007ACC' },
]
