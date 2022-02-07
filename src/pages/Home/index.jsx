import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Button, Hidden, Typography } from '@mui/material';
import DefaultCard from '../../components/DefaultCard';
import telemetryImage from '../../assets/images/telemetry.jpg'
import nearYouImage from '../../assets/images/near-you.jpg'
import paymentsImage from '../../assets/images/payments.jpg'

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
            <div className={classNames('pt-24')}>
                <DefaultCard 
                    description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
                    image={telemetryImage}
                    index={0}
                    title="Easy to use riding telemetry"
                />
                <DefaultCard 
                    description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
                    image={nearYouImage}
                    index={1}
                    title="Coming to a city near you"
                />
                <DefaultCard 
                    description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
                    image={paymentsImage}
                    index={2}
                    title="Zero hassle payments"
                />
            </div>
        </main>
    );
};

export default Home;