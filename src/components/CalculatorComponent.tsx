import React, { useState } from "react";
import {
  Button,
  ButtonVariant,
  InputGroup,
  TextInput,
  Select,
  SelectOption,
  MenuToggleElement,
  MenuToggle,
} from "@patternfly/react-core";

const CalculatorComponent: React.FC = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [operation, setOperation] = useState<string>("+");
  const [isOpen, setIsOpen] = React.useState(false);
  const [result, setResult] = useState<string | null>(null);
  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };
  const onSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    itemId: string | number | undefined
  ) => {
    // eslint-disable-next-line no-console
    console.log("selected", itemId);

    setOperation(itemId as string);
    setIsOpen(false);
  };
  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }

    switch (operation) {
      case "+":
        setResult((n1 + n2).toString());
        break;
      case "-":
        setResult((n1 - n2).toString());
        break;
      case "*":
        setResult((n1 * n2).toString());
        break;
      case "/":
        if (n2 === 0) {
          setResult("Division by zero");
        } else {
          setResult((n1 / n2).toString());
        }
        break;
      default:
        setResult("Invalid operation");
    }
  };
  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: "200px",
        } as React.CSSProperties
      }
    >
      {operation}
    </MenuToggle>
  );
  return (
    <div>
      <InputGroup>
        <TextInput
          type="number"
          id="number1"
          data-testid="number1"
          label="Number 1"
          value={num1}
          onChange={(e) => setNum1(e.currentTarget.value)}
        />
        <Select
          id="operation"
          isOpen={isOpen}
          aria-label="Select operation"
          data-testid="operation"
          selected={operation}
          onSelect={onSelect}
          toggle={toggle}
        >
          <SelectOption value="+">+</SelectOption>
          <SelectOption value="-">-</SelectOption>
          <SelectOption value="*">*</SelectOption>
          <SelectOption value="/">/</SelectOption>
        </Select>
        <TextInput
          type="number"
          id="number2"
          label="Number 2"
          data-testid="number2"
          value={num2}
          onChange={(e) => setNum2(e.currentTarget.value)}
        />
        <Button
          data-testid="calculate"
          variant={ButtonVariant.primary}
          onClick={calculate}
        >
          Calculate
        </Button>
      </InputGroup>

      <div>
        <p data-testid="Result">Result: {result}</p>
      </div>
    </div>
  );
};

export default CalculatorComponent;
