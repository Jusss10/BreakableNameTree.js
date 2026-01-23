import type { ChangeEvent } from "react";
import { Button } from "./Reuse/LandingButton";

type Props = {
  onAddCabinet: () => void
  valueHeight: number
  valueWidth: number
  setValueHeight: (value: number) => void
  setValueWidth: (value: number) => void
  onAddRuler: () => void
};

type SliderComponentProps = {
  label: string
  value: number
  setValue: (value: number) => void
  min: number
  max: number
  step: number
  unit?: string
};

export function SliderComponent({ label, value, setValue, min, max, step, unit = "cm" }: SliderComponentProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="w-full mb-4">
      <label className="block text-sm mb-1">
        {label}: {value}{unit}
      </label>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  );
}

export default function Sidebar({ onAddCabinet, valueHeight, valueWidth, setValueHeight, setValueWidth, onAddRuler }: Props) {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen p-3 bg-black/90 border-r border-white/10 z-50 text-white">
      <h3 className="text-lg font-semibold mb-4">Tools</h3>
      <div className="flex flex-col gap-2 mb-4">
        <Button onClick={onAddCabinet} variant="primary" size="sm">
          Add Cabinet
        </Button>
        <Button onClick={onAddRuler} variant="secondary" size="sm">
          Add Ruler
        </Button>
      </div>
      <SliderComponent 
        label="Closet Height"
        value={valueHeight}
        setValue={setValueHeight}
        min={200}
        max={240}
        step={10}
      />
      <SliderComponent 
        label="Closet Width"
        value={valueWidth}
        setValue={setValueWidth}
        min={60}
        max={100}
        step={10}
      />
    </aside>
  );
}

