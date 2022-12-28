import { useColorMode, Circle, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeChangerComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <IconButton
        colorScheme="gray"
        aria-label="Theme Changer"
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
      />
    </div>
  );
}
