import { render } from '@testing-library/react';
import { ListCard } from '../Xadwa_index';

import '@testing-library/jest-dom'

describe('<ListCard />', () => {

    it('screenshot empty',()=>{
        const {container} = render(<ListCard characters={[]} />);
        expect(container).toMatchSnapshot()
    })

    it('renders a message when isLoading is false and no characters are provided', () => {
        const { getByRole } = render(<ListCard characters={[]} />);
        const message = getByRole('heading',{
            name: 'No characters found'
        });
        expect(message).toBeInTheDocument();
    });

});
