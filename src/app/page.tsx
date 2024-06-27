import Markdown from "react-markdown";
import README from "/README.md";

export default function Home() {
  return (
    <div>
      <Markdown>{README}</Markdown>
    </div>
  );
}
