import classNames from 'classnames';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import appStore from '../../assets/images/icons/app-store.svg'
import googlePlay from '../../assets/images/icons/google-play.svg'
import { Hidden, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SignInBanner = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <section className={classNames(globalStyles.px, globalStyles.darkNavyBg, `py-12 bg-no-repeat 
            flex items-center flex-col md:flex-row md:justify-between sm:py-16`, classes.signInBanner)}>
            <Typography 
                component="h2" 
                variant="h4" 
                className={classNames('text-white text-center font-bold md:text-left')}>
                Sign up and<Hidden mdDown><br/></Hidden> Scoot off today
            </Typography>
            <div className={classNames('mt-8 md:mt-0 flex items-center')} >
                <Link 
                     className={classNames(classes.imageContainer, 'mr-4')} 
                    to="/">
                    <img 
                        alt=""
                        src={appStore}
                        className={classNames('block h-full w-full')}
                    />
                </Link>
                <Link 
                     className={classNames(classes.imageContainer)} 
                    to="/">
                    <img 
                        alt=""
                        src={googlePlay}
                        className={classNames('block h-full w-full')}
                    />
                </Link>
            </div>
        </section>
    );
};

export default SignInBanner;