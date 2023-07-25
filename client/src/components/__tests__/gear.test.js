import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Gear from '../Gear';

// Mock the react-redux useSelector hook
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Testgear component', () => {
  test('renders the component with shoes and bikes', () => {
    // Mock the useSelector hook to return some dummy gears data
    const mockGears = [
      { id: 1, shoes: 'Shoe A', bike: 'Bike A' },
      { id: 2, shoes: 'Shoe B', bike: 'Bike B' },
    ];
    // Mock the useDispatch hook to return a dummy function
    // as it is used in useEffect to dispatch fetchGears
    const mockDispatch = jest.fn();

    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f());

    jest.requireMock('react-redux').useSelector.mockReturnValue(mockGears);
    jest.requireMock('react-redux').useDispatch.mockReturnValue(mockDispatch);

    render(<Gear />);

    // Verify that the component renders the Shoes and Bikes headers
    expect(screen.getByText('Shoes')).toBeInTheDocument();
    expect(screen.getByText('Bikes')).toBeInTheDocument();

    // Verify that the rendered shoes and bikes data matches the dummy data
    expect(screen.getByText('Shoe A')).toBeInTheDocument();
    expect(screen.getByText('Bike A')).toBeInTheDocument();
    expect(screen.getByText('Shoe B')).toBeInTheDocument();
    expect(screen.getByText('Bike B')).toBeInTheDocument();
  });

  test('opens the PopUpShoes when "add shoes" button is clicked', () => {
    // Mock the useDispatch hook to return a dummy function
    const mockDispatch = jest.fn();

    jest.requireMock('react-redux').useDispatch.mockReturnValue(mockDispatch);

    render(<Gear />);

    // Click the "add shoes" button
    fireEvent.click(screen.getByText('add shoes'));

    // Verify that the PopUpShoes component is displayed
    expect(screen.getByTestId('popup-shoes')).toBeInTheDocument();
  });

  test('opens the PopUpBike when "add a bike" button is clicked', () => {
    // Mock the useDispatch hook to return a dummy function
    const mockDispatch = jest.fn();

    jest.requireMock('react-redux').useDispatch.mockReturnValue(mockDispatch);

    render(<Gear />);

    // Click the "add a bike" button
    fireEvent.click(screen.getByText('add a bike'));

    // Verify that the PopUpBike component is displayed
    expect(screen.getByTestId('popup-bike')).toBeInTheDocument();
  });

});
