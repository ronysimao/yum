import classNames from 'classnames';
import styles from './top-deals.module.scss';
import { Card } from '../card/card';
import cardStyles from '../card/card.module.scss';
import LasanhaDeCarneMoidaPng from '../../assets/lasanha-de-carne-moida.png';
import Kibe1Webp from '../../assets/kibe-1-.webp';

export interface TopDealsProps {
    className?: string;
}

export const TopDeals = ({ className }: TopDealsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.container, styles.root)}>
                <h2>Today&apos;s Top Deals</h2>
                <div className={styles.cards}>
                    <Card />
                    <Card imageUrl="https://receitatodahora.com.br/wp-content/uploads/2024/07/baiao-de-dois-1207-1024x683.jpg.webp">
                        Baião de dois
                    </Card>
                    <Card imageUrl="https://www.kitano.com.br/wp-content/uploads/2019/08/Kitano-RecipeImages-770x550-PicanhaAcebolada.jpg">
                        Picanha Acebolada
                    </Card>
                    <Card imageUrl={LasanhaDeCarneMoidaPng}>Lasanha a Bolonhesa</Card>
                    <Card imageUrl={Kibe1Webp}>Kibe frito com limão</Card>
                </div>
            </div>
        </div>
    );
};
