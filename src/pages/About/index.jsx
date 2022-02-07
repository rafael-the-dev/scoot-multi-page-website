import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { Button, Hidden, Typography } from '@mui/material';
import DefaultHero from '../../components/DefaultHero';
import DefaultCard from '../../components/DefaultCard';
import digitalEraImage from '../../assets/images/digital-era.jpg'
import betterLivingImage from '../../assets/images/better-living.jpg'

const AboutPage = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main>
            <DefaultHero 
                page="about"
                title='About'
            />
            <div className={classNames('pt-24 md:pt-20')}>
                <DefaultCard 
                    description="Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."
                    image={digitalEraImage}
                    index={0}
                    title="Mobility for the digital era"
                />
                <DefaultCard 
                    description="We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."
                    image={betterLivingImage}
                    index={1}
                    title="Better urban living"
                />
            </div>
        </main>
    );
};

export default AboutPage;