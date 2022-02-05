import classNames from 'classnames';
import { Link } from 'react-router-dom';
import React, { useMemo, useCallback, useState } from 'react';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.svg'
import { Button, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

const Header = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const [ canIOpenNavBar, setCanIOpenNavBar ] = useState(false);
    const menuClickHandler = useCallback(() => setCanIOpenNavBar(b => !b), [ ]);
    const clickHandler = useCallback(() => setCanIOpenNavBar(false), []);

    const headerNavigation = useMemo(() => (
        <nav 
            className={classNames(`sm:ml-8 sm:relative h-full sm:pt-0 w-full flex flex-col justify-between
            pt-12 pb-8`, globalStyles.px, classes.headerNav)}>
            <List component="ul" className={classNames('flex flex-col sm:flex-row')}>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/" >
                    <ListItemButton>
                        <ListItemText classes={{ root: classNames('text-white color-transition sm:mb-0 sm:mt-0', 
                            globalStyles.lightGreyColor, classes.headerNavItemText)}} primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/projects">
                    <ListItemButton>
                        <ListItemText 
                            classes={{ root: classNames('text-white color-transition sm:mb-0 sm:mt-0', 
                            globalStyles.lightGreyColor)}} 
                            primary="Projects" 
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={clickHandler} component={Link} to="/resume">
                    <ListItemButton>
                        <ListItemText 
                            classes={{ root: classNames('text-white color-transition sm:mb-0 sm:mt-0',
                            globalStyles.lightGreyColor)}} 
                            primary="Resume" 
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <Hidden smUp>
                <Link to="/resume" onClick={clickHandler} className={classNames(classes.contactMeLink)}>
                    <Button 
                        className={classNames('text-white font-bold w-full py-3 text-base capitalize', classes.headerGetStarted, 
                        globalStyles.yellowBg, 'bg-transition')}
                        variant="contained">
                        Get scootin
                    </Button>
                </Link>
            </Hidden>
        </nav>
    ), [ classes, clickHandler, globalStyles ]);

    return (
        <header 
            className={classNames('sm:flex sm:items-center sm:justify-between pt-4 pb-4', globalStyles.px)}>
            <div className={classNames('flex items-center justify-between')}>
                <Hidden smUp>
                    <IconButton 
                        className={classNames(globalStyles.yellowColor)}
                        onClick={menuClickHandler}>
                        { canIOpenNavBar ? <CloseIcon /> : <MenuIcon /> }
                    </IconButton>
                </Hidden>
                <Link to="/">
                    <img 
                        alt=""
                        className={classNames()}
                        src={logo}
                    />
                </Link>
                <Hidden smUp>
                    <IconButton className={classNames('opacity-0')}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Hidden smDown>
                    { headerNavigation }
                </Hidden>
            </div>
            <Hidden smUp>
                <Drawer 
                    anchor="left" 
                    open={canIOpenNavBar} 
                    onClose={menuClickHandler} 
                    classes={{ root: classNames(classes.headerDrawerRoot), paper: classNames(classes.headerDrawerPaper, globalStyles.darkNavyBg)}}>
                    { headerNavigation }
                </Drawer>
            </Hidden>
        </header>
    );
};

export default Header;