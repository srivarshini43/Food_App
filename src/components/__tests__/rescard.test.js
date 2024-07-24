import { render,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/rescardmock"
import "@testing-library/jest-dom"
it("should render restaurantcard component with props",()=>{
    render(<RestaurantCard resObj={MOCK_DATA}/>);
    const name=screen.getByText("Aasife Biriyani")
    expect(name).toBeInTheDocument();
})