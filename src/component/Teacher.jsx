import React from 'react'

const Teacher = () => {
    return (
        <div>
            <div className='mt-4  p-5'>
                <h1 className='text-center text-6xl font-extralight'>Our Teacher</h1>
            </div>
            <div className=' p-5'>
                <div className='flex justify-around'>
                    <a href="/teacher/1"><div className='cursor-pointer'>
                        <img src="./Teacher/t1.webp" alt="" style={{ width: "180px", height: "180px" }} className='rounded-full' />
                        <h1 className='text-center'>Sangeeta Singla</h1>
                    </div></a>
                    <a href="/teacher/2"><div className=''>
                        <img src="./Teacher/t2.webp" alt="" style={{ width: "180px", height: "180px" }} className='rounded-full' />
                        <h1 className='text-center'>Suraj Tripathi</h1>
                        
                    </div>
                    </a>
                    <a href="/teacher/3"><div className=''>
                        <img src="./Teacher/t3.webp" alt="" style={{ width: "180px", height: "180px" }} className='rounded-full' />
                        <h1 className='text-center'>Radhika Gupta</h1>
                    </div>
                    </a>

                </div>
                <br />
                <br />
                
                <div className='flex justify-around'>
                    <a href="/teacher/4"><div className=''>
                        <img src="./Teacher/t4.webp" alt="" style={{ width: "180px", height: "180px" }} className='rounded-full' />
                        <h1 className='text-center'>Raj Tevari</h1>
                    </div></a>
                    <a href="/teacher/5"><div className=''>
                        <img src="./Teacher/t5.webp" alt="" style={{ width: "180px", height: "180px" }} className='rounded-full' />
                        <h1 className='text-center'>Sheenum gupta</h1>
                    </div></a>
                    <a href="/teacher/6"><div className=''>
                        <img src="./Teacher/t6.webp" alt="" style={{ width: "180px", height: "180px" }} className='rounded-full' />
                        <h1 className='text-center'>Mayank Gupta</h1>
                    </div></a>
                
                </div>
            </div>
        </div>
    )
}

export default Teacher