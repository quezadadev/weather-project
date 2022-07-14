import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardsContainer from '../CardsContainer';

const MockWeather = () => {
    return (
        <BrowserRouter>
            <CardsContainer />
        </BrowserRouter>
    )
}

describe("CardsContainer", () => {

    beforeEach(() => {
        jest.mock("../../../__mocks__/axios")
    })

    it('should fetch and render input element', async () => {
        render(
            <MockWeather />
        );
        const CardsContainerDivElement = await screen.findByTestId(`weather-card-0`)
        expect(CardsContainerDivElement).toBeInTheDocument();
    });
    
    it('should fetch and render input element', async () => {
        render(
            <MockWeather />
        );
    
        const CardsContainerDivElement = await screen.findByTestId(`weather-card-0`)
        screen.debug()
        expect(CardsContainerDivElement).toBeInTheDocument();
    });
})