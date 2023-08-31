import MainPage from "./MainPage";
import { StoryFn, Meta } from "@storybook/react";
import "@patternfly/react-core/dist/styles/base.css";
import App from "../App";
import { userEvent, within } from "@storybook/testing-library";
export default {
  component: MainPage,
  title: "Task",
  args: {
    title: "This is a default setting ",
    onClick: () => {},
    initialValue: 0,
  },
} as Meta<typeof MainPage>;

const Template: StoryFn<typeof MainPage> = (args) => {
  return <MainPage {...args} />;
};

export const InitialInstance = Template.bind({});
InitialInstance.args = {
  title: "this is Intial setting",
  initialValue: 10,
};
