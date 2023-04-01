import { render, screen, waitFor } from '@testing-library/react';
import { Episode } from '../index';

import '@testing-library/jest-dom'


describe('Episode component', () => {
  const mockData = {
    episode: 'S01E01',
    name: 'Pilot',
    created: '2017-11-10T12:56:36.618Z'
  };

  it('snapshot',async () => {
    
    const mockUrl = 'https://example.com/episode/1';
    
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const { container } = render(<Episode urlEpisode={mockUrl} />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(mockUrl));

    expect(container).toMatchSnapshot();
  })

  it('should render the episode card', async () => {

    const mockUrl = 'https://example.com/episode/2';
    
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    const { getByText } = render(<Episode urlEpisode={mockUrl} />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(mockUrl));

    const episode = getByText(mockData.episode);
    const name = getByText(mockData.name);
    const created = getByText('10/11/2017');

    expect(episode).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(created).toBeInTheDocument();
  });

  it('should render an error message when failed to fetch episode data', async () => {
    const mockUrl = 'https://example.com/episode/3';
    
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    const { getByText } = render(<Episode urlEpisode={mockUrl} />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(mockUrl));

    const message = getByText('Error loading episode data');

    expect(message).toBeInTheDocument();
  });
});
