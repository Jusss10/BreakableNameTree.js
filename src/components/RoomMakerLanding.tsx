type Props = {
  onStart: () => void;
};
export default function RoomMakerLanding({ onStart }: Props) {
  return (
    <div id="landing">
        <div>RoomMaker Landing Page</div>
        <div id="landing-buttons">
          <button type="button" onClick={onStart}>
            Add Standaard room
          </button>
          <button type="button" onClick={onStart}>
            Add Custom room
          </button>
        </div>
    </div>
  );
}
