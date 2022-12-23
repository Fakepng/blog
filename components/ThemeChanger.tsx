import { useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeChanger() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      {colorMode === "light" ? (
        <FaSun onClick={toggleColorMode} className="hover:cursor-pointer" />
      ) : (
        <FaMoon onClick={toggleColorMode} className="hover:cursor-pointer" />
      )}
    </div>
  );
}
