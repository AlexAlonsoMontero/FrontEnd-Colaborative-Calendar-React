import { configureStore } from "@reduxjs/toolkit";
import { renderHook } from "@testing-library/react"
import { Provider } from "react-redux";
import { useUiStore } from "../../src/hooks";
import { uiSlice } from "../../src/store";

const getMockStore =  ( initialState ) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer
        },
        preloadedState: {
            ui: { ...initialState }
        }
    })
}
describe(' Pruebas en useUiStore', () => {
    test('debe de regresar los valores por defecto ', () => {

        //estado inciial
        const mockStore = getMockStore({ isDateModalOpen: false });
        //montamos el hook
        const { result } = renderHook(() => useUiStore(), {
                wrapper: ({ children })=> <Provider store={ mockStore }>{ children }</Provider>
            }
        );
        expect (result.current).toEqual({
            isDateModalOpen: false,
            closeDateModal: expect.any (Function),
            openDateModal: expect.any (Function),
            closeDateModal: expect.any(Function)
            
        })
    })
})