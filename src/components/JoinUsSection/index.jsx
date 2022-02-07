import JoinUsCard from '../JoinUsCard';
import ourTechImage from '../../assets/images/our-tech.jpg'
import ourIntegrityImage from '../../assets/images/our-integrity.jpg'
import ourCommunityImage from '../../assets/images/our-community.jpg'
import classNames from 'classnames'
import { useStyles } from './styles'
import { useGlobalStyles } from '../../styles';


const JoinUsSection = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <section className={classNames(globalStyles.px, 'py-12')}>
            <div className={classNames('md:flex md:justify-between')}>
                <JoinUsCard 
                    description="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
                    index={0}
                    image={ourTechImage}
                    title="Our tech"
                />
                <JoinUsCard 
                    description="We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
                    index={1}
                    image={ourIntegrityImage}
                    title="Our integrity"
                />
                <JoinUsCard 
                    description="We uses local workforce with neighborhood organizations to greatly improve the overall growth and improve urban living."
                    index={2}
                    image={ourCommunityImage}
                    title="Our community"
                />
            </div>
        </section>
    );
};

export default JoinUsSection;