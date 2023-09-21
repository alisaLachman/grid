import { createBoard } from '@wixc3/react-board';
import { GridArea } from '../../../components/grid-area/grid-area';

export default createBoard({
    name: 'GridArea',
    Board: () => <GridArea />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1024,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
