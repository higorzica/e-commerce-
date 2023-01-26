import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/logo.png'
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant='overline' className='classes.title' color='inherit'>
                  <div className={classes.container_logo}>
                  <img src={logo} alt='Commerce.js' height='55px' className={classes.image} />
                    <p>Catiras Brasileiras</p>
                  </div>
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="./cart" aria-label='Abrir carrinho de compras' color='inherit'>
                      <Badge badgeContent={totalItems} color='secondary'>
                          <ShoppingCart />
                      </Badge>
                    </IconButton>
                </div> )}
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar