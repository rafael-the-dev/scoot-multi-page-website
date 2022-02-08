import classNames from 'classnames';
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';
import { List, Typography } from '@mui/material';
import DefaultHero from '../../components/DefaultHero';
import DefaultCard from '../../components/DefaultCard';
import joinUsImage from '../../assets/images/join-us.jpg'
import JoinUsSection from '../../components/JoinUsSection';

const Careers = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();
    return (
        <main>
            <DefaultHero page="careers" title='Careers' />
            <div className={classNames('pt-24 md:pt-20')}>
                <DefaultCard 
                    description="We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"
                    image={joinUsImage}
                    index={0}
                    title="Care to join our mission?"
                />
            </div>
            <JoinUsSection />
        </main>
    );
};

export default Careers;