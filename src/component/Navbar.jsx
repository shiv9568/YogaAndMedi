import React from 'react';
import logo from "../assets/logo.png";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../Authenti/Server/store/atoms/user.js";
import { userEmailState } from "../Authenti/Server/store/selectors/userEmail.js";
import { useNavigate } from "react-router-dom";
import { AwesomeButton } from 'react-awesome-button';

const Navbar = () => {
    const navigate = useNavigate();
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState);

    const handleLogout = () => {
        console.log("token remove")
        localStorage.removeItem("token");
        setUser({
            isLoading: false,
            userEmail: null
        });
        navigate("/login");
    };

    return (
        <div className='flex justify-between bg-gray-200'>
            <a href="/">
                <div className='p-5 ml-4'>
                    <img src={logo} alt="Logo" className='w-[70px] h-[50px]' />
                </div>
            </a>
            <div>
                <ul className='flex space-x-12 justify-end p-5 list-none '>
                    <a href="/article"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Article</li></a>
                    <a href="/teacher"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Teacher</li></a>
                    <a href="/activityfud"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Activity</li></a>
                    <a href="/pricing"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Pricing</li></a>
                </ul>
            </div>
            <div className='mr-5'>
                {userEmail ? (
                    <AwesomeButton type="primary" className='mt-4 text-md' onPress={handleLogout}>Logout</AwesomeButton>
                ) : (
                    <a href="/login">
                        <AwesomeButton type="primary" className='mt-4 text-md'>Logout</AwesomeButton>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Navbar;