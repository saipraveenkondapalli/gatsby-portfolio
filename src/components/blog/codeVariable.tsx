import * as  React from "react"
import { Code } from "@chakra-ui/react"

interface CodeVariableInterface {
  children: React.ReactNode


}

const CodeVariable: React.FC<CodeVariableInterface> = ({ children }) => {
  return (
    <Code colorScheme={"orange"}>
      {children}
    </Code>
  )
}

export default CodeVariable