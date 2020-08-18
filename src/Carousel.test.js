import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// todo make a beforeEach...please

test("smoke test for Carousel component==> renders without crashing", () => {
    render( <Carousel/>)
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText, debug } = render(<Carousel />);
  // fire the event  on the right arrow to show the second image
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument()
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();

  // fire the event  on the left arrow to go backwards
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);
   // expect the first image to show, but not the second
   expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

});

test("left arrow is missing on the first image", () => {
  const { queryByTestId, debug } = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");
  expect(queryByTestId("left-arrow")).not.toBeInTheDocument()
  expect(rightArrow).toBeInTheDocument()

  // click on the right arrow twice
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // expect the opposite of the first expectations
  expect(queryByTestId("left-arrow")).toBeInTheDocument()
  expect(rightArrow).not.toBeInTheDocument()


})
