import {render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';
import { getGifs } from '../../src/helpers/getGifs';

const image ={
    id: '977YesTjNfQC7vQiph',
    title: 'Dragon Ball GIF by Toei Animation',
    url: 'https://media0.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif?cid=14246f2958zmvh8rnuckuhfxozejfzwy6v2r0p4qfswrp83i&ep=v1_gifs_search&rid=giphy.gif&ct=g'
}

describe('Pruebas en el GifItem', () => {
    test('Debe de hacer match con el snapshot', async () => {
        
        const {container} = render(<GifItem key ={image.id} {...image}/>)

        expect(container).toMatchSnapshot()

    });

    test('Debe de mostrar la imagen con el url y el ALT indicado',async () => {
        
        render(<GifItem key ={image.id} {...image}/>);

        // screen.debug();

        // *Manera de evaluar atributo por atribulo (No muy eficiente)
        // expect(screen.getByRole("img").src).toBe(image.url);
        // expect(screen.getByRole("img").alt).toBe(image.title);

        // *Manera mas eficiente y elegante de probar varios atributos. 
        const {src,alt} = screen.getByRole("img");
        expect(alt).toBe(image.title);
        expect(src).toBe(image.url);

    });

    test('Debe de mostrar el titulo en el componente', () => {
        
        render(<GifItem key ={image.id} {...image}/>);

        expect(screen.getByText(image.title)).toBeTruthy();
    })

})