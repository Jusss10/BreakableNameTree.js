type Props = {
  onStart: () => void;
};
export default function RoomMakerLanding({ onStart }: Props) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">RoomMaker</h1>
        <div className="flex gap-4">
          <button 
            type="button" 
            onClick={onStart} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer border-none"
          >
            Add Standard room
          </button>
          <button 
            type="button" 
            onClick={onStart} 
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer border-none"
          >
            Add Custom room
          </button>
        </div>
    </div>
  );
}
