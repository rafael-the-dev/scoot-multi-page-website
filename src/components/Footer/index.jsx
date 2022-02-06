import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';
import { useStyles } from './styles'
import classNames from 'classnames';
import { useGlobalStyles } from '../../styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <footer className={classNames(globalStyles.px, classes.footer, `py-12 flex flex-col items-center
            sm:justify-between sm:flex-row sm:py-8`)}>
            <div className={classNames('sm:flex sm:items-center')}>
                <Link to="/">
                    <Logo 
                        className={classNames(globalStyles.svgColor, 'text-white')}
                    />
                </Link>
                <ul className={classNames('flex flex-col mt-8 items-center sm:mt-0 sm:ml-8 sm:flex-row md:ml-12')}>
                    <li className={classNames('mb-3 sm:mb-0 sm:mr-4')}>
                        <Link
                            className={classNames(globalStyles.dimGreyColor, 'font-bold')} 
                            to="/">
                            About
                        </Link>
                    </li>
                    <li className={classNames('mb-3 sm:mb-0 sm:mr-4')}>
                        <Link
                            className={classNames(globalStyles.dimGreyColor, 'font-bold')} 
                            to="/">
                            Location
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={classNames(globalStyles.dimGreyColor, 'font-bold')} 
                            to="/">
                            Careers
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className={classNames('flex mt-12 items-center sm:mt-0')}>
                <li className={classNames('mr-3')}>
                    <FacebookIcon className={classNames(globalStyles.yellowColor)} />
                </li>
                <li className={classNames('mr-3')}>
                    <TwitterIcon className={classNames(globalStyles.yellowColor)} />
                </li>
                <li>
                    <InstagramIcon className={classNames(globalStyles.yellowColor)} />
                </li>
            </ul>
        </footer>
    );
};

export default Footer;