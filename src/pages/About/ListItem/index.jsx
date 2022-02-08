import { useState } from "react"
import { Collapse, ListItemButton, ListItemText, Typography } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../../styles';
import classNames from 'classnames';

const ListItem = ({ answer, question }) => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <ListItemButton 
                className={classNames(classes.bg, 'md:py-4', { 'mb-4': !open })}
                onClick={() => setOpen(s => !s)}>
                <ListItemText 
                    classes={{ primary: 'font-bold'}}
                    className={classNames(globalStyles.darkNavyColor, )}
                    primary={ question } 
                />
                {open ? <ExpandLess className={classNames(globalStyles.yellowColor)} /> : <ExpandMore className={classNames(globalStyles.yellowColor)} />}
            </ListItemButton>
            <Collapse 
                className={classNames(globalStyles.px, classes.bg, { 'mb-4 pb-4': open })}
                in={open} 
                timeout="auto" 
                unmountOnExit>
                <Typography
                    className={classNames(globalStyles.darkNavyColor, 'text-base')}
                    variant="body2"
                    >
                    { answer }
                </Typography>
            </Collapse>
        </>
    );
};

export default ListItem;