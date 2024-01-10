import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en AddCategory', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={()=>{}}/>);

        const input = screen.getByRole("textbox");

        fireEvent.input(input, {target: {value: "Saitama"}});

        expect(input.value).toBe("Saitama")

        // screen.debug();
    })

    test('Debe de llarmar onNewCategory si el input tiene valor', () => {
        const inputValue    = "Saitama";
        
        // * Uso de una simulación de funcion un jest.mock
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        // *Generación de eventos (ingreso de valor en input) (submit de formulario)
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug()
        expect(input.value).toBe("");

        // * Verificacion de si la funcion simulada fue llamada en la prueba
        expect(onNewCategory).toHaveBeenCalled()

        // *Verificacion de que la funcion simulada de jest fue llamada cierta cantidad de veces
        expect(onNewCategory).toHaveBeenCalledTimes(1);

        // *Verificación que la función simulada de jest fue llamada con determinado valor que se esperado
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe llamar el onNewCategory si el input esta vacio', () => {
        
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole("form");
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    });
})