import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from "../../../src/store/auth/authSlice"
import { authenticatedState, initialState } from "../../__fixtures__/authStates"
import { testUserCreentials } from "../../__fixtures__/testUser";


describe('Pruebas en authSlice', () =>{
    test('debe de devolver el estado inicial',()=>{
        expect( authSlice.getInitialState()).toEqual( initialState )
    });
    test('debe realizar un login', ()=>{
        const state = authSlice.reducer( initialState, onLogin( testUserCreentials ) );
        expect( state ).toEqual({
            status: 'authenticated',
            user: testUserCreentials,
            errorMessage: undefined
        })
    })
    test('debe realizar un logout', ()=>{
        const state = authSlice.reducer( authenticatedState, onLogout());
        expect ( state ).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined
        })
    })

    test('debe de limpiar el mensaje de error', ()=>{
        const errorMessage = 'Credenciales no válidas'
        let state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
        expect ( state ).toEqual({
            status: 'not-authenticated',
            user:{},
            errorMessage: errorMessage
        })
        state = authSlice.reducer(state,clearErrorMessage());
        expect( state.errorMessage ).toBe( undefined );
    })

    test('debe devolver status checking en onChjeking', ()=>{
        const state = authSlice.reducer(authenticatedState, onChecking());
        expect ( state.status ).toBe( 'checking' );
    })
})