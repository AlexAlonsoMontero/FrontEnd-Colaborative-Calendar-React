import { onCloseDateModal, onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice"

describe('Pruebas uiSlice',()=>{
    test('debe de regresar elestado por defecto', ()=>{
        expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
    })

    test('debe de cambair el isDateModalOpen corrrectamente', ()=>{
        let state = uiSlice.getInitialState();
        state = uiSlice.reducer(state, onOpenDateModal());
        expect(state.isDateModalOpen).toBeTruthy();

        state = uiSlice.reducer(state, onCloseDateModal());
        expect( state.isDateModalOpen ).toBeFalsy();
    })
})