import React from 'react';

const Blog = () => {
    const imageArray = []; // Assuming you have an array of 9 image URLs

    for (let i = 1; i <= 9; i++) {
        imageArray.push(
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  p-5 ml-44" key={i}>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i}.jpg`} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 1}.jpg`} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 2}.jpg`} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 3}.jpg`} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 4}.jpg`} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 5}.jpg`} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 6}.jpg`} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 7}.jpg`} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 8}.jpg`} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 9}.jpg`} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={`/gallery/${i + 10}.jpg`} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg magnify" src={`/gallery/${i + 11}.jpg`} alt="" />
                    </div>
                </div>
            </div>
        );
        i += 11;
    }

    return (
        <>
        <div className='p-5 mb-16 mt-7 gallery' id='#gallery'>
                <h1 className='text-center text-6xl font-semibold'>𝕸𝖞 𝕲𝖆𝖑𝖑𝖊𝖗𝖞</h1>
        </div>
            {imageArray}
        </>
    );
}

export default Blog;
