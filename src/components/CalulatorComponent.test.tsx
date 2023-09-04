import { render, screen, fireEvent } from "@testing-library/react";
import CalculatorComponent from "./CalculatorComponent";

// describe("CalculatorComponent", () => {
//   it("renders the component correctly", () => {
//     render(<CalculatorComponent />);
//     expect(screen.getByTestId("calculate")).toBeInTheDocument();
//   });

//   it("performs addition correctly", () => {
//     render(<CalculatorComponent />);
//     const num1Input = screen.getByTestId("number1");
//     const num2Input = screen.getByTestId("number2");
//     fireEvent.change(num1Input, { target: { value: "5" } });
//     fireEvent.change(num2Input, { target: { value: "3" } });
//     fireEvent.click(screen.getByText("+"));

//     expect(screen.getByTestId("Result")).toBeInTheDocument();
//   });
// });
describe("CalculatorComponent", () => {
  beforeEach(() => {
    render(<CalculatorComponent />);
  });

  it("initially displays an empty result", () => {
    const resultElement = screen.getByTestId("Result");
    expect(resultElement).toHaveTextContent("Result:");
  });

  it("performs addition correctly", () => {
    const num1Input = screen.getByTestId("number1");
    const num2Input = screen.getByTestId("number2");
    const calculateButton = screen.getByTestId("calculate");

    fireEvent.change(num1Input, { target: { value: "5" } });
    fireEvent.change(num2Input, { target: { value: "3" } });
    fireEvent.click(calculateButton);

    const resultElement = screen.getByTestId("Result");
    expect(resultElement).toHaveTextContent("Result: 8");
  });

  it("performs subtraction correctly", () => {
    const num1Input = screen.getByTestId("number1");
    const num2Input = screen.getByTestId("number2");
    const operationSelect = screen.getByLabelText("Select operation");
    const calculateButton = screen.getByTestId("calculate");

    fireEvent.change(num1Input, { target: { value: "8" } });
    fireEvent.change(num2Input, { target: { value: "3" } });

    fireEvent.change(operationSelect, { target: { value: "-" } });
    fireEvent.click(calculateButton);

    const resultElement = screen.getByTestId("Result");
    expect(resultElement).toHaveTextContent("Result: 5");
  });
});
