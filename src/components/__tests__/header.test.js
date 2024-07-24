import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
it("should load the header with login compnent",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginbutton=screen.getByRole("button")
    expect(loginbutton).toBeInTheDocument();
})
it("should load the header with cart compnent",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginbutton=screen.getByText("Cart(0)")
    expect(loginbutton).toBeInTheDocument();
})
it("should change the login button to logout when clicked",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginbutton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginbutton)
    const logoutbutton=screen.getByRole("button",{name:"Logout"})
    expect(logoutbutton).toBeInTheDocument();
})