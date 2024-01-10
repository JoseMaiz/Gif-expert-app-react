import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGitfs } from "../../src/hooks/useFetchGitfs";

jest.mock('../../src/hooks/useFetchGitfs');

const category = "Dragon Ball";

describe('Pruebas en GifGrid', () => {
    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGitfs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category = {category}/>)
        
        // screen.debug()
        // *Verificación de que si se esta mostrando cierto textos despues de la renderización del component
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Debe de mostrar items cuando e carga las imagenes de useFechGifs', () => {
        
        const gifs = [
            {
                id: "AALDSLFLsld",
                title: "Dragon Ball 1",
                url: "http://localhost/DragonBall.jpg"
            },
            {
                id: "123",
                title: "Goku",
                url: "http://localhost/Goku.jpg"
            }
        ]

        useFetchGitfs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        
        render(<GifGrid category = {category}/>)

        expect(screen.getAllByRole("img").length).toBe(2);
        // screen.debug()
        
    })
})