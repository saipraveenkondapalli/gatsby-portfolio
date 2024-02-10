import * as  React from "react"
import { Code } from "@chakra-ui/react"

interface CodeBlockProps {
  language: string;
  children: React.ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
  // Your implementation here
  return (
    <div  className={"code-container"}>
      <pre><Code className={`language-${language}`} width={"full"}>
        {children}
      </Code></pre></div>
  );
};

export default CodeBlock;