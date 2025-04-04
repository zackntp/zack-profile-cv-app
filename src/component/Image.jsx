import React from 'react'
import { Avatar,Box } from '@mui/material'

function Image() {
  return (
    <>
    <Box bgcolor='black' width='100%' justifyItems='center' pt='60px'>
        <Avatar src='/src/assets/zphoto2.png' sx={{
            width:'70%',
            height:'600px',
            borderRadius:5
        }}>

        </Avatar>
    </Box>
    </>
  )
}

export default Image