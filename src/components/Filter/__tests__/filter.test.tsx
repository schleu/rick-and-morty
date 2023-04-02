import { fireEvent, render, screen } from '@testing-library/react';
import { Filter, FilterProps } from '../index';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom'

const mockSetFilters = jest.fn();

const mockFilter: FilterProps = {
  name: 'Rick',
  gender: 'Male',
  status: 'Alive',
};

describe('<Filter />', () => {
  it('snapshot', () => {
    const { container } = render(<Filter />);
    expect(container).toMatchSnapshot()
  });

  it('should render properly', () => {
    render(<Filter />);

    const nameInput = screen.getByTestId('name') as HTMLInputElement;
    const genderSelect = screen.getByTestId('gender') as HTMLSelectElement;
    const statusSelect = screen.getByTestId('status') as HTMLSelectElement;
    const searchButton = screen.getByTestId('search') as HTMLButtonElement;

    expect(nameInput).toBeInTheDocument();
    expect(genderSelect).toBeInTheDocument();
    expect(statusSelect).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should be able change values', async () => {
    const { getByTestId } = render(<Filter />);

    const nameInput = getByTestId('name') as HTMLInputElement;
    const genderSelect = getByTestId('gender') as HTMLSelectElement;
    const statusSelect = getByTestId('status') as HTMLSelectElement;

    await userEvent.type(nameInput, String(mockFilter.name));
    fireEvent.change(genderSelect, { target: { value: mockFilter.gender} });
    fireEvent.change(statusSelect, { target: { value: mockFilter.status } });

    expect(nameInput).toHaveValue(mockFilter.name)
    expect(genderSelect).toHaveValue(mockFilter.gender)
    expect(statusSelect).toHaveValue(mockFilter.status)

  })

  it('should call setFilters with correct values', async () => {

    const { getByTestId } = render(<Filter />);

    const nameInput = getByTestId('name') as HTMLInputElement;
    const genderSelect = getByTestId('gender') as HTMLSelectElement;
    const statusSelect = getByTestId('status') as HTMLSelectElement;
    const searchButton = getByTestId('search') as HTMLButtonElement;

    await userEvent.type(nameInput, String(mockFilter.name));
    fireEvent.change(genderSelect, { target: { value: mockFilter.gender} });
    fireEvent.change(statusSelect, { target: { value: mockFilter.status } });
    await userEvent.click(searchButton)

    expect(mockSetFilters).toHaveBeenCalledWith(mockFilter);
  });
});
