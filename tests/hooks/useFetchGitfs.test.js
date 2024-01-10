import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGitfs } from "../../src/hooks/useFetchGitfs"

describe('Pruebas en el hook useFetchGitfs', () => {
    
    test('Debe regresar el estado inicial', () => {

        const {result} = renderHook(()=> useFetchGitfs("Dragon ball"));
        const {images,isLoading} = result.current
        
        // console.log(result);

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy();

    });

    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async () => {

        const {result} = renderHook(()=> useFetchGitfs("Dragon ball"));
        
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images,isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();

    });
})