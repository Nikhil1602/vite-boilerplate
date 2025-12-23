import './App.css'
import { packageIncludes } from '@/lib/constants';

function App() {

  return (
    <div className='bg-linear-to-br from-[#0066ff] to-[#d54dff] h-screen flex justify-center items-center'>
      <div className=''>
        <h1 className='tracking-tight text-white text-center font-bold text-[90em]'>Vite <span className='text-[#ffbf01]'>Boilerplate</span></h1>
        <div className='text-white text-lg rounded-xl p-5 min-w-[500px] min-h-[300px] mt-5' style={{ boxShadow: '0 0 25px white' }}>
          <ul className='text-md text-gray-300 mt-5'>
            {
              packageIncludes.map((x) => (
                <pre key={x.id} className="flex items-start font-medium text-lg gap-3 mb-2"><x.Icon size={30} className='text-yellow-500' /> {x.name}</pre>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
