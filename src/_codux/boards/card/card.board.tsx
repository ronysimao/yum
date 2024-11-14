import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    environmentProps: {
        windowHeight: 565,
        windowWidth: 668,
        windowBackgroundColor: '#7b7979',
    },
});
