import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {
    test('Debe regresar la etiqueta principal y el snapshot', () => {
        
        const {container} = render(<GifExpertApp/>)

        expect(container).toMatchSnapshot()
        expect(screen.getByRole("heading", {level:1}).innerHTML).toBe("GifExpertApp")
    });

    test('No debe regresar nada cuando se repite el value de entrada en el buscador de gifs', () => {
        render(<GifExpertApp/>)
        
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target: {value: "Drangon ball"}});
        fireEvent.submit(form);

        expect(screen.getAllByRole("heading", {level:3}).length).toBe(1)
    });

    test('Debe agregarse el nuevo valor que se introdujo en el buscador de gifs', () => {
        
        const valor = "Saitama"; 
        render(<GifExpertApp/>)

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target: {value: valor}});
        fireEvent.submit(form);

        expect( screen.getByText(valor)).toBeTruthy()


    });
})