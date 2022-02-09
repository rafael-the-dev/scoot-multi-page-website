import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Button, Hidden, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import DefaultHero from '../../components/DefaultHero';
import worldMapImage from '../../assets/images/world-map-mobile.png'
import worldMapTabletImage from '../../assets/images/world-map-mobile.png'
import worldMapDesktopImage from '../../assets/images/world-map-mobile.png'

const Locations = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const Location = ({ name }) => {
        return (
            <Typography
                className={classNames(globalStyles.darkNavyColor, classes.location, `capitalize py-6 w-full 
                font-bold text-center mb-4`)}
                component="p"
                variant="h6"
            >
                { name }
            </Typography>
        )
    };

    const Image = ({ src }) => (
        <img
            alt="locations"
            className={classNames('block object-contain w-full h-full')}
            src={src}
        />
    );

    return (
        <main>
            <DefaultHero page="careers" title='Locations' />
            <section className={classNames(globalStyles.px, `md:py-12`)}>
                <div className={classNames(classes.worldMapImageContainer)}>
                    <Hidden smUp>
                        <Image src={worldMapImage} />
                    </Hidden>
                    <Hidden smDown mdUp>
                        <Image src={worldMapTabletImage} />
                    </Hidden>
                    <Hidden mdDown>
                        <Image src={worldMapDesktopImage} />
                    </Hidden>
                </div>
               <Hidden mdUp>
                    <Location name="New york" />
                    <Location name="London" />
                    <Location name="Jakarta" />
                    <Location name="Yokohama" />
               </Hidden>
            </section>
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