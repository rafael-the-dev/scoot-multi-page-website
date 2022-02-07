import classNames from 'classnames';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Typography } from '@mui/material';
import { useMemo } from 'react'

const DefaultHero = ({ page, title }) => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const bgClasses = useMemo(() => ({
        about: classes.heroAbout
    }), [ classes ])

    return (
        <section 
            className={classNames('block jus py-12 bg-no-repeat bg-center bg-cover', bgClasses[page],
            globalStyles.px)}>
             <Typography
                className={classNames('font-bold text-white text-center md:text-left sm:text-5xl')}
                component="h1"
                variant="h4">
                { title }
            </Typography>
        </section>
    );
};

export default DefaultHero;