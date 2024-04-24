import React from "react";
import benefitBg from "../assets/images/benefitBg.png";
import pose8 from "../assets/images/pose8.png";
import pose3 from "../assets/images/pose3.png";
import pose5 from "../assets/images/pose5.png";
import pose2 from "../assets/images/pose2.png";

export default function Benefits() {
    return (
        <div className=" bg-orange-50 h-[100vh] px-5 py-3 flex flex-col justify-center bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${benefitBg})` }}>
            <h3 className=" text-[#513125] text-4xl flex justify-center font-bold cormorant py-1 my-1">
                Benefits of yoga
            </h3>
          

            <div className="cards flex flex-wrap justify-evenly my-2 mx-3 ">
                <div className=" my-3 flex flex-col justify-center text-center shadow-md  max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-[#ceb1a6] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <img src={pose8} alt="pic" style={{ width: "27%", margin: "auto" }} />
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#513125] dark:text-white">
                        Strong Body Life
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Yoga strengthens muscles, increases flexibility, improves posture, enhances balance, boosts endurance, reduces stress.
                    </p>
                </div>
                <div className=" my-3 flex flex-col justify-center text-center shadow-md  max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-[#ceb1a6] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <img src={pose3} alt="pic" style={{ width: "27%", margin: "auto" }} />
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#513125] dark:text-white">
                        Increased Flexibility
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Yoga enhances flexibility, enabling greater range of motion, better joint health and daily tasks.
                    </p>
                </div>
                <div className=" my-3 flex flex-col justify-center text-center shadow-md  max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-[#ceb1a6] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <img src={pose5} alt="pic" style={{ width: "27%", margin: "auto" }} />
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#513125] dark:text-white">
                        Increases Blood Flow
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Yoga promotes increased blood flow, delivering oxygen and nutrients more efficiently to tissues and supporting overall cardiovascular health and vitality.
                    </p>
                </div>
                <div className=" my-3 flex flex-col justify-center text-center shadow-md  max-w-sm p-4 bg-white border border-gray-200 rounded-lg  hover:bg-[#ceb1a6] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <img src={pose2} alt="pic" style={{ width: "27%", margin: "auto" }} />
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#513125] dark:text-white">
                        Drops Blood Pressure
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Regular yoga practice can help lower blood pressure by reducing stress, promoting relaxation, improving circulation.
                    </p>
                </div>
            </div>
        </div>
    );
}
