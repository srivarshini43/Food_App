
import { act, fireEvent, render,screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import Cart from "../Cart"
import MOCK_DATA_MENU from "../mocks/mockresmenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA_MENU);
        },
    });
});
it("should render cart page", async ()=>{
    await act (async ()=>render(<BrowserRouter><Provider store={appStore}><Header/><RestaurantMenu/><Cart/></Provider></BrowserRouter>))
    const accordianHeader=screen.getByText("Rice Mixes(10)")
    fireEvent.click(accordianHeader);
    expect(screen.getAllByTestId("resmenu").length).toBe(20);
    expect(screen.getByText("Cart(0)")).toBeInTheDocument();
    const addbtns=screen.getAllByRole("button",{name:"Add+"});
    fireEvent.click(addbtns[0]);//bcoz we have lot of add button
    expect(screen.getByText("Cart(1)")).toBeInTheDocument();
})