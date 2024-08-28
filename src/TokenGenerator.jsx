// import { useState } from 'react';
// import './App.css';

// const TokenGenerator = () => {
//   const [blueTokens, setBlueTokens] = useState('');
//   const [bluePrefix, setBluePrefix] = useState('');
//   const [bluePerRow, setBluePerRow] = useState('');
//   const [redTokens, setRedTokens] = useState('');
//   const [redPrefix, setRedPrefix] = useState('');
//   const [redPerRow, setRedPerRow] = useState('');
//   const [generatedTokens, setGeneratedTokens] = useState({ blue: [], red: [] });

//   const generateTokens = () => {
//     const blueArray = Array.from({ length: blueTokens }, (_, i) => `${bluePrefix}${i + 1}`);
//     const redArray = Array.from({ length: redTokens }, (_, i) => `${redPrefix}${i + 1}`);

//     setGeneratedTokens({ blue: blueArray, red: redArray });
//   };

//   const clearFields = () => {
//     setBlueTokens('');
//     setBluePrefix('');
//     setBluePerRow('');
//     setRedTokens('');
//     setRedPrefix('');
//     setRedPerRow('');
//     setGeneratedTokens({ blue: [], red: [] });
//   };

//   const renderTokens = (tokens, perRow, color) => {
//     const rows = [];
//     for (let i = 0; i < tokens.length; i += perRow) {
//       const rowTokens = tokens.slice(i, i + perRow);
//       rows.push(
//         <div key={i} className="mb-4">
//           {rowTokens.map((token, index) => (
//             <span
//               key={index}
//               className={`inline-block mr-2 mb-2 px-3 py-1 text-white rounded ${color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}
//             >
//               {token}
//             </span>
//           ))}
//         </div>
//       );
//     }
//     return rows;
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-center">Token Generator</h1>
//       <div className="flex flex-col sm:flex-row justify-between gap-7">
//         <div className="w-full sm:w-1/2">
//           <label className="block mb-2 font-semibold">Number of blue tokens:</label>
//           <input
//             type="number"
//             value={blueTokens}
//             onChange={(e) => setBlueTokens(Math.max(0, parseInt(e.target.value, 10)))}
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <label className="block mt-4 mb-2 font-semibold">Prefix for blue tokens:</label>
//           <input
//             type="text"
//             value={bluePrefix}
//             onChange={(e) => setBluePrefix(e.target.value)}
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <label className="block mt-4 mb-2 font-semibold">Blue tokens per row:</label>
//           <input
//             type="number"
//             value={bluePerRow}
//             onChange={(e) => setBluePerRow(Math.max(1, parseInt(e.target.value, 10)))}
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
//           <label className="block mb-2 font-semibold">Number of red tokens:</label>
//           <input
//             type="number"
//             value={redTokens}
//             onChange={(e) => setRedTokens(Math.max(0, parseInt(e.target.value, 10)))}
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//           <label className="block mt-4 mb-2 font-semibold">Prefix for red tokens:</label>
//           <input
//             type="text"
//             value={redPrefix}
//             onChange={(e) => setRedPrefix(e.target.value)}
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//           <label className="block mt-4 mb-2 font-semibold">Red tokens per row:</label>
//           <input
//             type="number"
//             value={redPerRow}
//             onChange={(e) => setRedPerRow(Math.max(1, parseInt(e.target.value, 10)))}
//             className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//         </div>
//       </div>
//       <div className="mt-8 flex justify-center">
//         <button
//           onClick={generateTokens}
//           className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Generate
//         </button>
//         <button
//           onClick={clearFields}
//           className="bg-gray-400 text-white px-6 py-2 ml-4 rounded shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
//         >
//           Clear
//         </button>
//       </div>
//       <div className="mt-12">
//         <h2 className="text-xl font-bold mb-4">Generated Tokens</h2>
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Blue Tokens</h3>
//           <div>
//             {renderTokens(generatedTokens.blue, bluePerRow, 'blue')}
//           </div>
//         </div>
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Red Tokens</h3>
//           <div>
//             {renderTokens(generatedTokens.red, redPerRow, 'red')}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TokenGenerator;



import { useState } from 'react';
import './App.css';

const TokenGenerator = () => {
  const [blueTokens, setBlueTokens] = useState('');
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState('');
  const [redTokens, setRedTokens] = useState('');
  const [redPrefix, setRedPrefix] = useState('');
  const [redPerRow, setRedPerRow] = useState('');
  const [generatedTokens, setGeneratedTokens] = useState({ blue: [], red: [] });

  const generateTokens = () => {
    const blueArray = Array.from({ length: blueTokens }, (_, i) => `${bluePrefix}${i + 1}`);
    const redArray = Array.from({ length: redTokens }, (_, i) => `${redPrefix}${i + 1}`);

    setGeneratedTokens({ blue: blueArray, red: redArray });
  };

  const clearFields = () => {
    setBlueTokens('');
    setBluePrefix('');
    setBluePerRow('');
    setRedTokens('');
    setRedPrefix('');
    setRedPerRow('');
    setGeneratedTokens({ blue: [], red: [] });
  };

  const renderTokens = (tokens, perRow, color) => {
    const rows = [];
    for (let i = 0; i < tokens.length; i += perRow) {
      const rowTokens = tokens.slice(i, i + perRow);
      rows.push(
        <div key={i} className="mb-4">
          {rowTokens.map((token, index) => (
            <span
              key={index}
              className={`inline-block mr-2 mb-2 px-3 py-1 text-white rounded ${color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`}
            >
              {token}
            </span>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="token-generator p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Token Generator</h1>
      <div className="content-container">
        <div className="input-section flex flex-col sm:flex-row justify-between gap-7">
          <div className="w-full sm:w-1/2">
            <label className="block mb-2 font-semibold">Number of blue tokens:</label>
            <input
              type="number"
              value={blueTokens}
              onChange={(e) => setBlueTokens(Math.max(0, parseInt(e.target.value, 10)))}
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="block mt-4 mb-2 font-semibold">Prefix for blue tokens:</label>
            <input
              type="text"
              value={bluePrefix}
              onChange={(e) => setBluePrefix(e.target.value)}
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="block mt-4 mb-2 font-semibold">Blue tokens per row:</label>
            <input
              type="number"
              value={bluePerRow}
              onChange={(e) => setBluePerRow(Math.max(1, parseInt(e.target.value, 10)))}
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
            <label className="block mb-2 font-semibold">Number of red tokens:</label>
            <input
              type="number"
              value={redTokens}
              onChange={(e) => setRedTokens(Math.max(0, parseInt(e.target.value, 10)))}
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <label className="block mt-4 mb-2 font-semibold">Prefix for red tokens:</label>
            <input
              type="text"
              value={redPrefix}
              onChange={(e) => setRedPrefix(e.target.value)}
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <label className="block mt-4 mb-2 font-semibold">Red tokens per row:</label>
            <input
              type="number"
              value={redPerRow}
              onChange={(e) => setRedPerRow(Math.max(1, parseInt(e.target.value, 10)))}
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
        <div className="buttons mt-8">
          <button
            onClick={generateTokens}
            className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Generate
          </button>
          <button
            onClick={clearFields}
            className="bg-black text-white px-6 py-2 ml-4 rounded shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="generated-tokens mt-12">
        <h2 className="text-xl font-bold mb-4">Generated Tokens</h2>
        <div>
          <h3 className="text-lg font-semibold mb-2">Blue Tokens</h3>
          <div>
            {renderTokens(generatedTokens.blue, bluePerRow, 'blue')}
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Red Tokens</h3>
          <div>
            {renderTokens(generatedTokens.red, redPerRow, 'red')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenGenerator;
