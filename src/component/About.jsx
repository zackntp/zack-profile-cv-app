import React from 'react'
import { Grid,Typography,Button,Box,Avatar} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function About() {
  return (
    <>
    <Box id='about' bgcolor='black' color='white' pt='60px'>
    <Grid container spacing={2} alignItems='start' justifyContent='center' >

        <Grid item >
            <Typography fontSize='70px'>
                ABOUT ME
            </Typography>
          
          
        </Grid>
        
        <Grid item>
            <Box ml='280px'>
        <Box sx={{
            width:'600px',
            height:'200px',
            mt:'20px',
        
           
            
        }}>
        
        <Typography>
        A passionate and detail-oriented programmer with experience in developing and maintaining software applications. Skilled in various programming languages and frameworks, Focused on problem-solving, optimizing performance, and delivering high-quality code.
        </Typography>
        <Box height='10px'></Box>
        <Typography color='grey'>
        I enjoy solving complex problems, optimizing performance, and creating user-friendly interfaces. In my free time, I love exploring new programming languages and contributing to open-source projects.
        </Typography>
        
        </Box>
        <Box  display='flex' mb='20px'>
            <Button variant='contained' sx={{
                borderRadius:5,
                bgcolor:'#fd9805',
                color:'black'
            }}>
            DOWLOAD RESUME
            </Button>
            <Avatar sx={{
                mx:1,
                bgcolor:'#fd9805'
            }}>
                <a href="https://www.linkedin.com/in/nuttapong-singphan-59a32a326/">
                <LinkedInIcon sx={{
                    color:'black',
                     cursor:'pointer'
                }}></LinkedInIcon>
                </a>
            </Avatar>
            <Avatar
            sx={{
                bgcolor:'#fd9805'
            }}>

                <a href="https://github.com/zackntp">
                <GitHubIcon sx={{
                    color:'black',
                     cursor:'pointer'
                }}></GitHubIcon>
                </a>
            </Avatar>
        </Box>
       </Box>
        </Grid>
        

    </Grid>
    
    </Box>
    </>
  )
}

export default About