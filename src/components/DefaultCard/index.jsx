import classNames from 'classnames';
import { Link } from 'react-router-dom';
import React, { useMemo, useCallback, useState } from 'react';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const DefaultCard = ({ description, image, title }) => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <Card 
            elevation={0} 
            className={classNames(globalStyles.px, 'mb-8')}
            component="article">
            <CardMedia
                alt={ title }
                className={classNames(classes.cardMedia, 'rounded-full')}
                component="img"
                image={ image }
            />
            <CardContent className={classNames('pt-8')}>
                <Typography 
                    className={classNames(globalStyles.darkNavyColor, 'text-center font-bold')}
                    component="h2"
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

export default DefaultCard;