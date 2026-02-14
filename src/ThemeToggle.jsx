import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full hover:bg-muted transition"
    >
      {dark ? <Sun className=" 
    text-primary
    bg-primary/10
    hover:bg-primary/20
    p-2
    lg:size-10 size-8
    rounded-full
    transition
  " /> : <Moon  className=" lg:size-10 size-8
    text-primary
    bg-primary/10
    hover:bg-primary/20
    p-2
    rounded-full
    transition
  " />}
    </button>
  );
};

export default ThemeToggle;
