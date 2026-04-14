export default function IFRSPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      
      <h1 className="text-3xl font-bold mb-6">
        IFRS AI Advisor
      </h1>

      <select className="bg-[#111] border border-gray-700 p-3 rounded mb-6">
        <option>IAS 36 – Impairment of Assets</option>
        <option>IFRS 15 – Revenue Recognition</option>
        <option>IFRS 9 – Financial Instruments</option>
      </select>

      <textarea 
        className="w-full h-40 bg-[#111] border border-gray-700 p-4 rounded mb-4"
        placeholder="Ask a question about IFRS..."
      />

      <button className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-500">
        Generate Answer
      </button>

    </div>
  );
}
