import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { Timer } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Bonju
    
        <button>
          <Timer /> 
        </button>
      </Heading>
    </>
  );
}
