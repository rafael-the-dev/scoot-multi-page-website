import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Typography } from '@mui/material';
import ourCommunityImage from '../../assets/images/our-community.jpg'

const Locations = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <section>
                <Typography 
                    className={classNames(globalStyles.darkNavyColor, 'text-center md:text-left font-bold')}
                    component="h2"
                    variant="h5" 
                    >
                    { title }
                </Typography>
                <Typography 
                    className={classNames(globalStyles.dimGreyColor, 'mt-6 text-center md:text-left sm:text-base')}
                    variant="body2" 
                    >
                    { description }
                </Typography>
                <Link to="/" className={classNames(classes.heroLink, ' mt-8')}>
                    <Button 
                        className={classNames('capitalize px-8 py-2', globalStyles.yellowBg)}
                        variant="contained">
                        Learn more
                    </Button>
                </Link>
            </section>
        </main>
    );
};

export default Locations;