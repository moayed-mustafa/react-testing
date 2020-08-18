import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


test("smoke test for Card component==> renders without crashing", () => {
    render( <Card/>)
})
