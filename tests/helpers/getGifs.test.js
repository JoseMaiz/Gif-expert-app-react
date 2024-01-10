import { getGifs } from "../../src/helpers/getGifs"


describe('Prueba en getGifs', () => {
    test('Debe retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs("Dragon ball");

        // * De esta manera de verifica que el array de elementos no esta veniendo vacio verificando que sea mayor a cero su contenido
        expect(gifs.length).toBeGreaterThan(0);

        // * De esta manera se verifica mediante una muestra que los elementos que vienen dentro del array tienen una estructura esperada
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

    })
})

