import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "50vh"
    }}>
        <Typography sx={{
            fontSize: "42px",
            color: "orange"
        }}>
        Page Not Found
        </Typography>
    </Box>
  )
}

export default NotFound