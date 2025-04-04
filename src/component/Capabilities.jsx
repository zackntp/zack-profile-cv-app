import React from 'react'
import { Grid,Typography,Box} from '@mui/material'
import TechBoxComponent from './TechBoxComponent'
function Capabilities() {
  return (
   <>
   <Box bgcolor='black' color='white' pt='60px'>
    <Grid container spacing={2} alignItems='start' justifyContent='center'>
        <Grid item pr='60px'>
            <Typography sx={{
                fontSize:'70px'
            }}>
                MY CAPABILITIES
            </Typography>
        </Grid>
        <Grid item>
            <Box sx={{
                width:'600px',
                height:'300px',
                pt:"20px",
               
            }}>
                <Typography>
                I have a strong foundation in both frontend and backend development, specializing in modern web and mobile technologies. My key skills include:
                </Typography>
                
                <Box bgcolor='black' display='flex' mt='20px' sx={{
                   width: '100%',
                   flexWrap: 'wrap', 
                   gap:'10px',
              
    
                }}>
                    <TechBoxComponent text={'HTML'}/>
                    <TechBoxComponent text={'CSS'}/>
                    <TechBoxComponent text={'JAVASCRIPT'}/>
                    <TechBoxComponent text={'REACT'}/>
                    <TechBoxComponent text={'FLUTTER'}/>
                    <TechBoxComponent text={'JAVA'}/>
                    <TechBoxComponent text={'GO'}/>
                    <TechBoxComponent text={'NODEJS'}/>
                    <TechBoxComponent text={'MYSQL'}/>  
                    <TechBoxComponent text={'POSTGRESSQL'}/>  
                </Box>
            </Box>
           
        </Grid>
    </Grid>
   </Box>
   </>
  )
}

export default Capabilities