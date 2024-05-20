import React from 'react'
import logo from "../assets/logo.png"



import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Navbar = () => {
    return (
        <div className='flex justify-between bg-gray-200'>
            <a href="/">
                <div className='p-5  ml-4'>
                    <img src={logo} alt="" className=' w-[70px] h-[50px]' />
                    
                </div>
            </a>
            <div className=' mt-5'>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            </div>
            
            <div>
                <ul className='flex  space-x-12 justify-end  p-5 list-none'>
                    <a href="/article"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Article</li>
                    </a>
                    <a href="/teacher"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Teacher</li></a>
                    <a href="/activityfud"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Activity</li></a>
                    <a href="/pricing"><li className='text-xl font-semibold mt-1 cursor-pointer magnify list-none'>Pricing</li></a>
                    

                </ul>
            </div>
        </div>
    )
}

export default Navbar
