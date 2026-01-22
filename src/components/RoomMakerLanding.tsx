type Props = {
  onStart: () => void;
};
export default function RoomMakerLanding({onStart} : Props) {
  return (
    <>
      <div>RoomMaker Landing Page</div>
      <button type="button" onClick={onStart}>
        Add Ruler
      </button>
    </>
  );
}
