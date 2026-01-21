import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

type Props = {
  onAddCabinet: () => void;
  valueHeight: number;
  valueWidth: number;
  setValueHeight: (value: number) => void;
  setValueWidth: (value: number) => void;
  onAddRuler: () => void;
};

type SliderComponentProps = {
  label: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  step: number;
  unit?: string;
};

export function SliderComponent({ label, value, setValue, min, max, step, unit = "cm" }: SliderComponentProps) {
  const handleChange = (_event: Event, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 200, mb: 2 }}>
      <Typography gutterBottom>
        {label}: {value}{unit}
      </Typography>
      <Slider
        value={value}
        min={min}
        step={step}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

export default function Sidebar({ onAddCabinet, valueHeight, valueWidth, setValueHeight, setValueWidth, onAddRuler }: Props) {
  return (
    <aside className="sidebar">
      <h3>Tools</h3>
      <button type="button" onClick={onAddCabinet}>
        Add Cabinet
      </button>
      <button type="button" onClick={onAddRuler}>
        Add Ruler
      </button>
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

