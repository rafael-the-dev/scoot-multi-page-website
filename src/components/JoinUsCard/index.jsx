import classNames from 'classnames';
import { Link } from 'react-router-dom';
import React, { useMemo, useCallback, useState } from 'react';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const JoinUsCard = ({ description, image, index, title }) => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const imagesClasses = useMemo(() => [
        classes.first,
        classes.second, 
        classes.third
    ], [ classes ])

    return (
        <Card 
            elevation={0} 
            className={classNames(globalStyles.px, classes.card, `mb-8 md:px-0`)}
            component="article">
            <div className={classNames(imagesClasses[index], classes.index, `after:flex after:mx-auto 
                after:rounded-full after:font-bold after:justify-center after:items-center after:text-2xl`)}>
                <CardMedia
                    alt={ title }
                    className={classNames(classes.cardMedia, 'rounded-full mx-auto')}
                    component="img"
                    image={ image }
                />
            </div>
            <CardContent className={classNames(classes.cardContent, `-mt-4 md:px-0 md:pb-0`, )}>
                <Typography 
                    className={classNames(globalStyles.darkNavyColor, 'text-center font-bold')}
                    component="h3"
                    variant="h5" 
                    >
                    { title }
                </Typography>
                <Typography 
                    className={classNames(globalStyles.dimGreyColor, 'mt-6 text-center sm:text-base')}
                    variant="body2" 
                    >
                    { description }
                </Typography>
            </CardContent>
        </Card>
    )
};

export default JoinUsCard;