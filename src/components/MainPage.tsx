import { number } from "prop-types";
import React from "react";
import {
  Text,
  TextVariants,
  TextContent,
  ActionList,
  ActionListItem,
  Button,
} from "@patternfly/react-core";
type MainPageProps = {
  title: string;
  initialValue: number;
};
function MainPage({ title, initialValue }: MainPageProps) {
  const [value, setValue] = React.useState<number>(initialValue);
  const onClickHandle = (direction: String) => {
    if (direction === "reset") {
      setValue(initialValue);
    } else {
      direction === "increment" ? setValue(value + 1) : setValue(value - 1);
    }
  };
  return (
    <TextContent>
      <Text component={TextVariants.h1}>{title}Counter App </Text>
      <Text component={TextVariants.h2}>Counter: {value}</Text>
      <ActionList>
        <ActionListItem>
          <Button
            variant="primary"
            onClick={() => {
              onClickHandle("increment");
            }}
          >
            Increment (+1)
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button
            variant="warning"
            onClick={() => {
              onClickHandle("decrement");
            }}
          >
            Decrement (-1)
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button
            variant="danger"
            onClick={() => {
              onClickHandle("reset");
            }}
          >
            Reset
          </Button>
        </ActionListItem>
      </ActionList>
    </TextContent>
  );
}

export default MainPage;
