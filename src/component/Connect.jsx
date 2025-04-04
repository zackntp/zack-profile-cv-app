import React from 'react'
import { Typography,Button,TextField,Box,Grid } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Connect() {
  return (
    <>
    <Box bgcolor='black' pt='60px' color='white' pb='150px'>
    <Grid container spacing={2} alignItems='start' justifyContent='center'>
        <Grid item pr='60px'>
           <Box sx={{
            height:'530px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
           
            
           }}>
            <Box>
            <Typography sx={{
                fontSize:'70px'
            }}>
                LET'S CONNECT
            </Typography>
            <Typography my="10px" color='grey'>
                Email : s6552C10025@sau.ac.th
            </Typography>
            <Typography color='grey'>
                Phone : xxx-xxx-xxxx
            </Typography>
            <Box sx={{
                display:'flex',
                mt:'20px'
            }}>
                < a href="https://www.linkedin.com/in/nuttapong-singphan-59a32a326/">
                <LinkedInIcon sx={{
                    mr:1,
                    fontSize:'50px',
                    color:'#fd9805',
                    cursor:'pointer'
                }}></LinkedInIcon>
                </a>
              
              < a href="https://github.com/zackntp">
                <GitHubIcon sx={{
                    mx:1,
                     fontSize:'50px',
                     color:'#fd9805',
                     cursor:'pointer'
                }}></GitHubIcon>
                </a>
                <a href="https://www.instagram.com/ziigsaxx_/">
                <InstagramIcon sx={{
                    mx:1,
                     fontSize:'50px',
                     color:'#fd9805',
                     cursor:'pointer'
                }}></InstagramIcon>
                </a>
               </Box>
            </Box>
           <Typography color='grey'>
            © NUTTAPONG SINGPHAN
           </Typography>
           </Box>
        </Grid>
        <Grid>
            <Box sx={{
                width:'600px',
            
                pt:'20px',
                pl:'30px'
            }}>
                <Typography color='grey'>
                    Name
                </Typography>
                <TextField size='small' fullWidth sx={{
                    bgcolor:'grey',
                    
                }}></TextField>
                <Box height='20px'></Box>
                <Typography color='grey'>
                    Email
                </Typography>
                <TextField size='small' type='email' fullWidth sx={{
                    bgcolor:'grey',
                    
                }}></TextField>
                <Box height='20px'></Box>
                <Typography color='grey'>
                    Subject
                </Typography>
                <TextField size='small' fullWidth sx={{
                    bgcolor:'grey',
                    
                }}></TextField>
                <Box height='20px'></Box>
                <Typography color='grey'>
                    Message
                </Typography>
                <TextField size='large' multiline rows={5} fullWidth sx={{
                    bgcolor:'grey',
                    
                  
                    
                }}></TextField>
                 <Box height='30px'></Box>
                 <Button variant='contained' sx={{
                    bgcolor: '#fd9805',
                    color:'black',
                    borderRadius:10,
                    width:'120px',
                    height:'60px'
                 }}>SUBMIT</Button>
               
            </Box>
        </Grid>
    </Grid>
    </Box>
    </>
  )
}

export default Connect