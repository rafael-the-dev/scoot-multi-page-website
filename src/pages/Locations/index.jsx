import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import DefaultHero from '../../components/DefaultHero';
import ourCommunityImage from '../../assets/images/our-community.jpg'

const Locations = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <DefaultHero page="careers" title='Locations' />
            <section className={classNames(globalStyles.px, `flex flex-col items-center py-12 md:flex-row
                md:justify-between`)}>
                <Typography 
                    className={classNames(globalStyles.darkNavyColor, classes.notListedLocationTitle, `text-center md:text-left font-bold 
                    md:text-4xl md:w-52`)}
                    component="h2"
                    variant="h4" 
                    >
                    Your City Not Listed?
                </Typography>
                <Typography 
                    className={classNames(globalStyles.dimGreyColor, classes.notListedLocationsDescription, 
                        `mt-6 md:mt-0 text-center md:text-left sm:text-base md:growhh`)}
                    variant="body2" 
                    >
                    If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.
                </Typography>
                <Link to="/" className={classNames(classes.heroLink, ' mt-8 md:mt-0')}>
                    <Button 
                        className={classNames('capitalize px-8 py-2', globalStyles.yellowBg)}
                        variant="contained">
                        Message us
                    </Button>
                </Link>
            </section>
        </main>
    );
};

export default Locations;