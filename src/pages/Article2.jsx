import React from 'react'
import { FaBook } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Article1 = () => {
    return (
        <>
            <div className='bg-blue-100 flex justify-between'>
                <div className=' p-10'>
                    <h1 className='text-5xl gap-12 mt-20'>3 Tips to Restore <br /> Ojas: Cultivating <br />Vitality and Well-Being</h1>
                    <div className='mt-10  flex gap-x-3'>
                        <FaBook className='text-2xl mt-1' />
                        <h1 className='text-2xl'>YOGA |  AYURVEDA</h1>
                    </div>
                    <div className='  flex gap-x-3'>
                        <CiClock2 ook className='text-2xl mt-1' />
                        <h1 className='text-2xl'>10 min read</h1>

                    </div>
                </div>
                <div className="mt-6">
                    <img src="../Meditation_img/medi3.webp" alt="" className='w-[67vw]' />
                </div>
            </div>

            <div className='mt-8 px-56'>
                <div className=' '>
                    <p>In Ayurveda, ojas is considered the essence of vitality and immunity. It's the subtle substance that governs our overall health, well-being, and resilience. When ojas is depleted, we may feel fatigued, run-down, and susceptible to illness. Fortunately, there are simple yet powerful practices we can incorporate into our daily lives to replenish and restore this vital life force. Here are three tips to help you cultivate ojas and promote vitality and well-being.</p>
                </div>
                <div className='mt-2 gap-11'>
                    <h1 className='text-2xl font-extralight'>1. PRIORITIZE RESTFUL SLEEP</h1>
                    <p>One of the most effective ways to restore ojas is by prioritizing restful sleep. Quality sleep is essential for replenishing our body's energy reserves and allowing it to repair and rejuvenate. Aim for seven to nine hours of uninterrupted sleep each night, and create a calming bedtime routine to signal to your body that it's time to unwind. Avoid stimulating activities and electronics before bed, and instead, opt for gentle yoga, meditation, or reading to relax your mind and body. This 20-minute Sleep Soundly practice with Luke Ketterhagen is a great way to get ready for a good night's sleep.</p>
                </div>
                <div className='mt-2 gap-11'>
                    <h1 className='text-2xl font-extralight'>2. NOURISH YOURSELF WITH NUTRIENT-DENSE FOODS</h1>
                    <p>Another key aspect of restoring ojas is nourishing yourself with nutrient-dense foods that support vitality and immunity. Focus on incorporating whole, seasonal foods into your diet, including plenty of fresh fruits and vegetables, whole grains, legumes, nuts, seeds, and healthy fats. Opt for warm, cooked meals that are easy to digest, and avoid processed and refined foods that can deplete ojas. Additionally, consider incorporating Ayurvedic superfoods such as ghee, dates, almonds, and saffron into your diet, as these are known for their ojas-enhancing properties. If you’d like a quick treat to boost your ojas, whether it's for a post-yoga snack or a sweet indulgence after dinner, give these Almond Date Ojas Balls a try.</p>
                </div>
                <div className='mt-2 gap-11'>
                    <h1 className='text-2xl font-extralight'>3. PRACTICE SELF-CARE AND STRESS MANAGEMENT</h1>
                    <p>Lastly, practicing self-care and stress management techniques is crucial for replenishing ojas. Chronic stress can deplete our body's vital energy and compromise our immune system, making us more susceptible to illness. Incorporate daily self-care practices such as meditation, deep breathing exercises, gentle yoga, and mindfulness into your routine to promote relaxation and reduce stress levels. Prioritize activities that bring you joy and nourish your soul, whether it's spending time in nature, connecting with loved ones, or indulging in creative pursuits. Ellen Mosko's Restorative Oasis offers a sweet way to coax physical stress away from the body, allowing the mind and breath to slow down and re-establish a relaxed state.</p>
                </div>
                <div className='mt-2 gap-11'>
                    <h1 className='text-2xl font-extralight'>IN CONCLUSION</h1>
                    <p>By prioritizing restful sleep, nourishing yourself with nutrient-dense foods, and practicing self-care and stress management techniques, you can begin to replenish your ojas. In turn, you could begin to feel more energized and resilient from the inside out. Remember, small changes can lead to significant transformations on your journey to balanced living.</p>
                </div>
            </div>
        </>
    )
}

export default Article1