import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Heading attr={123} attr2="oss">Brasil</Heading>
      <Heading>Canarinho</Heading>
      <Heading>Brasa</Heading>
      <Heading>Brazuca</Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet
        dignissimos minus harum. Molestias accusantium eveniet quaerat
        consectetur corporis voluptas , possimus amet veritatis porro
        repellendus rerum neque ut ipsa et.
      </p>
    </>
  );
}
