import { makeStyles } from "@mui/styles";
import hero from '../../assets/images/home-hero-mobile.jpg'
import rightArrow from '../../assets/images/patterns/right-arrow.svg'
import heroTablet from '../../assets/images/home-hero-tablet.jpg'
import whiteCircles from '../../assets/images/patterns/white-circles.svg'
import heroDesktop from '../../assets/images/home-hero-tablet.jpg'
import leftDownwardArrow from '../../assets/images/patterns/left-downward-arrow.svg'

const linearGradient = 'linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1))';
const linearGradientDesktop = 'linear-gradient(to right, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1))';

export const useStyles = makeStyles(theme => ({
    hero: {
        backgroundImage: `${linearGradient}, url(${rightArrow}), url(${hero})`,
        backgroundPosition: 'center, left -297px bottom 32px, center',
        backgroundSize: 'cover, 400px, cover',
        height: 504,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `${linearGradient}, url(${rightArrow}), url(${whiteCircles}), url(${heroTablet})`,
            backgroundPosition: 'center, left -118px bottom 18px, right -24px bottom 39px, center',
            backgroundSize: 'cover, 354px, 175px, cover',
            height: 550,
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${leftDownwardArrow}), url(${rightArrow}), url(${whiteCircles}), ${linearGradientDesktop}, url(${heroDesktop})`,
            backgroundPosition: 'left -452px bottom 130px, left 565px bottom 127px, right -24px bottom 132px, center, center',
            backgroundSize: '531px, 299px, 175px, cover, cover',
            height: 500,
        },
        [theme.breakpoints.up(1200)]: {
            backgroundPosition: 'left -452px bottom 130px, left 600px bottom 127px, right -24px bottom 132px, center, center',
            backgroundSize: '531px, 354px, 175px, cover, cover',
        }
    },
    heroDescription: {
        [theme.breakpoints.up('md')]: {
            marginLeft: 80,
            width: 400
        }
    },
    heroLink: {
        [theme.breakpoints.up('md')]: {
            marginLeft: 80,
        }
    },
    steppersCardsContainer: {
        [theme.breakpoints.up('sm')]: {
            '&::before': {
                backgroundColor: '#E5ECF4',
                height: '100%',
                left: '10.5%',
                top: 0,
                width: 9
            }
        },
        [theme.breakpoints.up(804)]: {
            '&::before': {
                left: '10%',
            }
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: '5%',
            paddingRight: '5%',
            '&::before': {
                height: 9,
                left: 0,
                top: 'calc(6rem + 30px)',
                width: 'calc(100% - 31.3333%)'
            }
        }
    }
}));