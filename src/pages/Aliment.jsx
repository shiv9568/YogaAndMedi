import React from 'react'


const Aliment = () => {
    return (
        <div className='mt-8'>
            <div className=''>
                <h1 className='text-center text-5xl font-medium'>𝕾𝖊𝖑𝖊𝖈𝖙 𝕬𝖎𝖑𝖒𝖊𝖓𝖙</h1>
            </div>
            <div className='mt-8 flex'>
                <div className='p-5 shadow-2xl'>

                    <a href="/heart" className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <img src="gallery/heart.jpg" alt="" className='w-[45vw] h-[29vh]' />
                        <h1 className="font-normal text-gray-700 dark:text-gray-400">heart</h1>
                    </a>

                </div>
                <div className='p-5 shadow-2xl' >
                    <a href="/digestive" className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <img src="gallery/digestive.jpg" alt="" className='w-[45vw] h-[29vh]' />
                        <h1 className="font-normal text-gray-700 dark:text-gray-400">digestive</h1>
                    </a>

                </div>
                <div className='p-5  shadow-2xl'>

                    <a href="/asthma" className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <img src="gallery/asthma.jpg" alt="" className='w-[45vw] h-[29vh]' />
                        <h1 className="font-normal text-gray-700 dark:text-gray-400">asthma</h1>
                    </a>

                </div>
                <div className='p-5 shadow-2xl'>

                    <a href="/anxiety" className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <img src="gallery/anxiety.jpg" alt="" className='w-[45vw] h-[29vh]' />
                        <h1 className="font-normal text-gray-700 dark:text-gray-400">Anxiety</h1>
                    </a>
                </div>
                <div className='p-5 shadow-2xl '>

                    <a href="/jointpain" className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <img src=" /gallery/pain.jpg" alt="" className='w-[45vw] h-[29vh]' />
                        <h1 className="font-normal text-gray-700 dark:text-gray-400">Pain</h1>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Aliment
