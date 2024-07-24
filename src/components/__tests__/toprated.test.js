import { render,act,screen, fireEvent } from "@testing-library/react";
import Body from "../Body"
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/mocksearch.json"
//import { act } from "react-dom/test-utils";  
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});
it("should display rescards before and after search",async ()=>{
    await act (async ()=>
    render(
        <BrowserRouter>
    <Body/>
  </BrowserRouter>
    )
)
const cardsBeforeSearch=screen.getAllByTestId("rescards")
expect(cardsBeforeSearch.length).toBe(8);
const toprated=screen.getByRole("button",{name:"Top Rated Restaurants"})
fireEvent.click(toprated)
const cardsAfterSearch=screen.getAllByTestId("rescards")
expect(cardsAfterSearch.length).toBe(7);
})