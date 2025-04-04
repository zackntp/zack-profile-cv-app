import React from 'react'
import { Grid,Typography,Button,Box,Avatar} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function Introduce() {
  return (
   <>
    <Box sx={{
        bgcolor:'black',
        color:'white'
    }}>
        <Grid container spacing={2} alignItems='center' justifyContent='center' pt='50px'>
           <Grid item mr='250px'>
            <Typography sx={{
                fontSize:'70px',
               
            }}>
                Hello I AM 
            </Typography>
            <Typography sx={{
                fontSize:'70px',
               
            }}>
                ZACK NUTTAPONG
            </Typography>
            <Typography sx={{
                color:'grey'
            }}>
                I am passionate Backend Developer from Thailand
            </Typography>
            <Box display='flex' mt='20px'>
            <Button variant='contained' sx={{
                bgcolor:'#fd9805',
                color:'black',
                mr:'2',
                borderRadius:5
            }}>
                Contact Me
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
            <Avatar sx={{
                mx:1,
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
            
           </Grid>

    
         <Grid item mb='50px'>
            <Avatar 
            src='/src/assets/zphoto.jfif'
            sx={{width:'400px',height:'500px',borderRadius:2}}
            />
         </Grid>
        </Grid>
    </Box>
   </>
  )
}

export default Introduce