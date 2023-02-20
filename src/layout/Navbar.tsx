import React from 'react';

import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Stack } from '@mui/material';
import { RiGlobeFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <RiGlobeFill className="globe" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {' '}
          Countries App
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton size="large" edge="start" color="inherit">
            <Link to="/">
              <AiFillHome className="navbar-home" />
            </Link>
          </IconButton>
          <IconButton size="large" edge="start" color="inherit">
            <Link to="/favourites">
              <MdFavorite className="navbar-fav" />
            </Link>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
