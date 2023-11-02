import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
const Header = () => {
  const [mobile, setMobile] = useState(false)
  return (
    <AppBar>Encabezado</AppBar>
  )
}

export default Header