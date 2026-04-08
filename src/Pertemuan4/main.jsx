import { createRoot } from "react-dom/client";
import './tailwind.css';
import Tailwindcss from "./tailwindcss";
import UserForm from "./userform";
import HitungGajiForm from "./hitunggajiform";

createRoot(document.getElementById("root")).render(
  <div>
    {/* <Tailwindcss/> */}
    <UserForm/>
    <HitungGajiForm/>
  </div>
)