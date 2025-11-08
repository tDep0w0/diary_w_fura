import { useNavigate } from 'react-router-dom';

export default function AddLogPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#071226] text-white p-6">
      <button
        className="bg-white text-black rounded-md py-2 px-4 mb-4"
        onClick={() => navigate(-1)}
      >
        ← Return
      </button>

      <h1 className="text-2xl mb-4">Add New Logs</h1>
    </div>
  );
}
