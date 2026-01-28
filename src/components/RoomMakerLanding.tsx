import { Button } from "./Reuse/LandingButton";

type Props = {
  onStart: () => void;
};

export default function RoomMakerLanding({ onStart }: Props) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">RoomMaker</h1>
        <div className="flex gap-4">
          <Button onClick={onStart} variant="primary" size="lg">
            Add Standard room
          </Button>
          <Button onClick={onStart} variant="primary" size="lg">
            Add Custom room
          </Button>
        </div>
    </div>
  );
}
