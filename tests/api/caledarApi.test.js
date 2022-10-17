import calendarApi from "../../src/api/ calendarApi"

describe('pruebas en Calendar api', () => {
    test('Debe de tener la configuración por defecto', () => {
        expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
    });
    test('debe de tener x-token en el header de todas las peticiones', async() => {
        const token = "ABC-123-XYZ";
        localStorage.setItem("token", token);
        const res = await calendarApi
          .get("/auth")
          .then((res) => res)
          .catch((res) => res);
        expect(res.config.headers["x-token"]).toBe(token);
    });
})