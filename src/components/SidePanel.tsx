import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

type Props = {
  onAddCabinet: () => void;
  valueHeight: number;
  setValueHeight: (value: number) => void;
};

export function NonLinearSlider({ valueHeight, setValueHeight }: { valueHeight: number, setValueHeight: (value: number) => void }) {

  const handleChange = (event: Event, newValue: number) => {
    setValueHeight(newValue);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Closet Height: {valueHeight}cm
      </Typography>
      <Slider
        value={valueHeight}
        min={180}
        step={20}
        max={240}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}

export default function Sidebar({ onAddCabinet, valueHeight, setValueHeight }: Props) {
	return (
		<aside className="sidebar">
			<h3>Tools</h3>
			<button type="button" onClick={onAddCabinet}>
				Add DEF cabinet
			</button>
			<NonLinearSlider valueHeight={valueHeight} setValueHeight={setValueHeight} />
		</aside>
	);
}

