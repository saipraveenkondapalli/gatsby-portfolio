import * as  React from "react"
import { Code } from "@chakra-ui/react"
interface Command {
  children: React.ReactNode;
}

const Commands: React.FC<Command> = ({ children }) => {
  return (
    <Code p={3} my={3} width={"100%"} rounded="md">
      {children}
    </Code>
  );
};

export default Commands