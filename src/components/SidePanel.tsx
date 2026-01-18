import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useState } from "react";

type Props = {
  onAddCabinet: () => void;
};


function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value: number) {
  return 2 ** value;
}

export function NonLinearSlider() {
  const [value, setValue] = useState<number>(10);

  const handleChange = (event: Event, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Storage: {valueLabelFormat(calculateValue(value))}
      </Typography>
      <Slider
        value={value}
        min={5}
        step={1}
        max={30}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}

export default function Sidebar({ onAddCabinet }: Props) {
	return (
		<aside className="sidebar">
			<h3>Tools</h3>
			<button type="button" onClick={onAddCabinet}>
				Add DEF cabinet
			</button>
			<NonLinearSlider />
		</aside>
	);
}

