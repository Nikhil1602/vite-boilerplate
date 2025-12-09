import './App.css'
import { CheckCircle } from 'lucide-react'

function App() {

  return (
    <div className='bg-gradient-to-br from-[#5900FF] to-[#130036] h-screen flex justify-center items-center'>
      <div className=''>
        <h1 className='tracking-tight text-white font-bold text-[90em]'>Vite <span className='text-[#ffbf01]'>Boilerplate</span> Pack</h1>
        <div className='text-white text-lg border-2 border-white rounded-xl p-5 h-[300px] mt-5 '>
          <p className='text-2xl font-bold tracking-tight'>Setup Includes</p>
          <ul className='text-sm text-gray-300 mt-5 tracking-wider'>
            <li className='flex gap-2 items-center mb-2'><CheckCircle className='text-yellow-300' size={25} /> <span className='text-lg'>Tailwind CSS</span></li>
            <li className='flex gap-2 items-center mb-2'><CheckCircle className='text-yellow-300' size={25} /> <span className='text-lg'>Shadcn UI (Neutral)</span></li>
            <li className='flex gap-2 items-center mb-2'><CheckCircle className='text-yellow-300' size={25} /> <span className='text-lg'>Vite - Typescript + React Compiler</span></li>
            <li className='flex gap-2 items-center mb-2'><CheckCircle className='text-yellow-300' size={25} /> <span className='text-lg'>Font - Poppins</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
