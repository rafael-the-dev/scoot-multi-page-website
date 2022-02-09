import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import ourCommunityImage from '../../assets/images/our-community.jpg'

const Locations = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <section className={classNames(globalStyles.px, `flex flex-col items-center py-12`)}>
                <Typography 
                    className={classNames(globalStyles.darkNavyColor, 'text-center md:text-left font-bold')}
                    component="h2"
                    variant="h4" 
                    >
                    Your City Not Listed?
                </Typography>
                <Typography 
                    className={classNames(globalStyles.dimGreyColor, 'mt-6 text-center md:text-left sm:text-base')}
                    variant="body2" 
                    >
                    If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.
                </Typography>
                <Link to="/" className={classNames(classes.heroLink, ' mt-8')}>
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