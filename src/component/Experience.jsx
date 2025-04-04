import React from 'react'
import { Box,Typography,Grid } from '@mui/material'


function Experience() {
  return (
    <>
    <Box bgcolor='black' color='white' pt='60px'>
    <Grid container spacing={2} alignItems='start' justifyContent='center'>
        <Grid item pr='60px'>
            <Typography sx={{
                fontSize:'70px'
            }}>
                MY EXPERIENCE
            </Typography>
        </Grid>
        <Grid item>
    
        <Box sx={{
  width: '600px',
  height: '300px',
  pt: '20px',
  pl:'20px',
  display: 'flex',
  flexDirection: 'column', 
  
  
}}>
 
  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography>
      Zettamerge (Part-Time)
    </Typography>
    <Typography sx={{ color: 'grey' }}>
      Sep 2024-Present
    </Typography>
  </Box>
  <Box height='20px'></Box>
  <Typography sx={{
    color:'grey'
  }}>
    Experienced in backend development with Golang (Gin, Fiber), focusing on RESTful APIs, Domain-Driven Design (DDD), and PostgreSQL. And also has a basic understanding of microservices.

  </Typography>

 
  

</Box>
        
          
        </Grid>
    </Grid>
     
    </Box>
    </>
  ) 
}

export default Experience