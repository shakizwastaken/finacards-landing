import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SwitchMode({
  defaultValue,
}: {
  defaultValue: boolean;
}) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (value) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [value]);

  const handleToggle = () => setValue((val) => !val);

  return (
    <div
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-10 origin-bottom-right cursor-pointer select-none rounded-full bg-foreground p-4 transition-all hover:scale-110 [&>*]:stroke-background"
    >
      {value ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}
