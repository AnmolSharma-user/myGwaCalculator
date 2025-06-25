
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@/components/ui/switch";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="relative">
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-slate-800 data-[state=unchecked]:bg-yellow-100"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className={`transition-all duration-300 ${isDark ? 'translate-x-2.5' : '-translate-x-2.5'}`}>
          {isDark ? (
            <Moon className="h-3 w-3 text-slate-300" />
          ) : (
            <Sun className="h-3 w-3 text-yellow-600" />
          )}
        </div>
      </div>
    </div>
  );
};
