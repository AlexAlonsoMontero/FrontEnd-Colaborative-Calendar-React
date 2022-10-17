export const initialState = {
    status: 'checking',//'authenticated', 'no-authenticated'
    user: {},
    errorMessage: undefined
}

export const authenticatedState = {
    status: 'atuthenticated',
    user: {
        uid: 'abc',
        name: 'Alex'
    },
    errorMessage: undefined,
}

export const notAuthenticatedState = {
    status: 'not-authenticated',//'authenticated', 'no-authenticated'
    user: {
        uid: 'abc',
        name: 'Alex'
    },
    errorMessage: undefined
}