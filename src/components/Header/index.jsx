import classNames from 'classnames';
import { Link } from 'react-router-dom';
import React, { useMemo, useCallback, useState } from 'react';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { Button, Drawer, Hidden, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Header = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const [ canIOpenNavBar, setCanIOpenNavBar ] = useState(false);
    const menuClickHandler = useCallback(() => setCanIOpenNavBar(b => !b), [ ]);
    const clickHandler = useCallback(() => setCanIOpenNavBar(false), []);

    const headerNavigation = useMemo(() => (
        <nav 
            className={classNames(`sm:ml-12 sm:relative h-full w-full flex flex-col justify-between
            pt-12 pb-8 sm:px-0 sm:py-0`, globalStyles.px, classes.headerNav)}>
            <List component="ul" className={classNames('flex flex-col sm:flex-row sm:pb-0 sm:pt-0')}>
                <ListItem className={classNames('sm:px-0 sm:w-auto sm:mr-6')} disablePadding onClick={clickHandler} component={Link} to="/" >
                    <ListItemButton className={classNames('sm:py-0 sm:px-0 sm:hover:bg-transparent')}>
                        <ListItemText classes={{ root: classNames('color-transition sm:mb-0 sm:mt-0', 
                            globalStyles.lightGreyColor, classes.headerNavItemText)}} primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classNames('sm:px-0 sm:w-auto sm:mr-6')} disablePadding onClick={clickHandler} component={Link} to="/projects">
                    <ListItemButton className={classNames('sm:py-0 sm:px-0 sm:hover:bg-transparent')}>
                        <ListItemText 
                            classes={{ root: classNames('color-transition sm:mb-0 sm:mt-0', 
                            globalStyles.lightGreyColor, classes.headerNavItemText)}} 
                            primary="Projects" 
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem className={classNames('sm:px-0 sm:w-auto')} disablePadding onClick={clickHandler} component={Link} to="/resume">
                    <ListItemButton className={classNames('sm:py-0 sm:px-0 sm:hover:bg-transparent')}>
                        <ListItemText 
                            classes={{ root: classNames('color-transition sm:mb-0 sm:mt-0',
                            globalStyles.lightGreyColor, classes.headerNavItemText)}} 
                            primary="Resume" 
                        />
                    </ListItemButton>
                </ListItem>
            </List>
            <Hidden smUp>
                <Link to="/" onClick={clickHandler} className={classNames(classes.contactMeLink)}>
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
                    <Logo 
                        className={classNames()}
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
            <Hidden smDown>
                <Link to="/" onClick={clickHandler} className={classNames(classes.contactMeLink)}>
                    <Button 
                        className={classNames('text-white font-bold w-full py-2 shadow-none text-base capitalize', classes.headerGetStarted, 
                        globalStyles.yellowBg, 'bg-transition')}
                        variant="contained">
                        Get scootin
                    </Button>
                </Link>
            </Hidden>
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