import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Meditation = () => {
    const theme = useTheme();
    return (
        <div className=' gap-y-5'>
            <div className='text-center  mt-14 p-5'>
                <h1 className='text-5xl '>𝕾𝖊𝖑𝖊𝖈𝖙 𝕸𝖊𝖉𝖎𝖙𝖆𝖙𝖎𝖔𝖓</h1>
            </div>
            <div className='flex flex-wrap justify-between p-5 gap-y-8 overflow-x-auto'>
                <Card sx={{ display: 'flex' }} className='shadow-xl'>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Visualize Healing
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <AudioPlayer
              
                src="./sounds/rain.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/Meditation_img/med1.png"
                        alt="Live from space album cover"
                    />
                </Card>
               <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Honour The Devine <br />Femine
                            </Typography>
                          
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <AudioPlayer
                
                src="./sounds/rain.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/Meditation_img/med1.png"
                        alt="Live from space album cover"
                    />
                </Card>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Focus Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <AudioPlayer
               
                src="./sounds/rain.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/Meditation_img/med1.png"
                        alt="Live from space album cover"
                    />
                </Card>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Focus Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <AudioPlayer
               
                src="./sounds/rain.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/Meditation_img/med1.png"
                        alt="Live from space album cover"
                    />
                </Card>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Focus Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <AudioPlayer
               
                src="./sounds/rain.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/Meditation_img/med1.png"
                        alt="Live from space album cover"
                    />
                </Card>
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Focus Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <AudioPlayer
               
                src="./sounds/rain.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/Meditation_img/med1.png"
                        alt="Live from space album cover"
                    />
                </Card>
              
            </div>
            
            
        </div>
    )
}

export default Meditation
