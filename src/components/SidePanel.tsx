import type { ChangeEvent } from "react";

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
        <button 
          type="button" 
          onClick={onAddCabinet} 
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer border-none"
        >
          Add Cabinet
        </button>
        <button 
          type="button" 
          onClick={onAddRuler} 
          className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors cursor-pointer border-none"
        >
          Add Ruler
        </button>
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

