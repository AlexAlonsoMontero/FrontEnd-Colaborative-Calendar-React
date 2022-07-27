import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"

export const CalendarApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
