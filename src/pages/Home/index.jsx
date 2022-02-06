import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Button, Hidden, Typography } from '@mui/material';

const Home = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <section className={classNames(globalStyles.px, classes.hero, `bg-no-repeat md:mb-24
                flex flex-col justify-center items-center md:items-start`)}>
                <Typography
                    className={classNames('font-bold text-white text-center md:text-left sm:text-5xl')}
                    component="h1"
                    variant="h4">
                    Scooter sharing<Hidden mdDown><br/></Hidden> made simple
                </Typography>
                <Typography
                    className={classNames('mt-4 text-white text-center text-base md:text-left', 
                    classes.heroDescription)}
                    variant="body2">
                        Scoot takes the hassle out of urban mobility. Our bikes are placed in 
                        convenient locations in each of our cities. Use our app to locate 
                        the nearest bike, unlock it with a tap, and you’re away!
                </Typography>
                <Link to="/" className={classNames(classes.heroLink)}>
                    <Button 
                        className={classNames('capitalize px-8 py-2 mt-6', globalStyles.yellowBg)}
                        variant="contained">
                        Get scootin
                    </Button>
                </Link>
            </section>
        </main>
    );
};

export default Home;