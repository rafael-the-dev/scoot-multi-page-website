import { Typography } from '@mui/material';
import classNames from 'classnames';
//import { Link } from 'react-router-dom';
import React, { useMemo } from 'react';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';

const ContentCard = ({ description, index, title }) => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();
    
    const imagesClasses = useMemo(() => [
        classes.locating,
        classes.picking, 
        classes.enjoying
    ], [ classes ]);

    return (
        <article className={classNames(classes.card, globalStyles.px, 'mb-12 md:px-0')}>
            <Typography 
                className={classNames(globalStyles.darkNavyColor, imagesClasses[index], `text-center md:text-left 
                font-bold before:bg-no-repeat before:bg-contain before:bg-center before:block before:mx-auto 
                before:mb-6 sm:text-left sm:relative sm:before:absolute md:px-0 md:before:relative md:before:ml-0`, classes.title)}
                component="h2"
                variant="h5" 
                >
                { title }
            </Typography>
            <Typography 
                className={classNames(classes.description, globalStyles.dimGreyColor, `mt-6 text-center 
                sm:text-left sm:text-base md:px-0`)}
                variant="body2" 
                >
                { description }
            </Typography>
        </article>
    );
};

export default ContentCard;