
import { useFormik } from 'formik';
import './App.css';
import { useState } from 'react';

const TokenGenerator = () => {
  const formik = useFormik({
    initialValues: {
      blueTokens: '',
      bluePrefix: '',
      bluePerRow: '',
      redTokens: '',
      redPrefix: '',
      redPerRow: ''
    },
    onSubmit: (values) => {
      const blueArray = Array.from({ length: parseInt(values.blueTokens, 10) }, (_, i) => `${values.bluePrefix}${i + 1}`);
      const redArray = Array.from({ length: parseInt(values.redTokens, 10) }, (_, i) => `${values.redPrefix}${i + 1}`);
      setGeneratedTokens({ blue: blueArray, red: redArray });
    },
    onReset: () => {
      setGeneratedTokens({ blue: [], red: [] });
    },



    validate: values => {
      const errors = {};
    
      // validation for Blue tokens 
      if (values.blueTokens || values.bluePrefix || values.bluePerRow) {
        if (!values.blueTokens) {
          errors.blueTokens = 'Please enter the number of blue tokens if any other blue token field is entered';
        } else if (isNaN(values.blueTokens) || values.blueTokens < 0) {
          errors.blueTokens = 'Please enter a valid number of blue tokens';
        }
    
        if (!values.bluePrefix) {
          errors.bluePrefix = 'Required if any blue token field is entered';
        }
    
        if (!values.bluePerRow || isNaN(values.bluePerRow) || values.bluePerRow < 1) {
          errors.bluePerRow = 'Required and must be at least 1 if any blue token field is entered';
        }
      }
    
      // validation for Red tokens
      if (values.redTokens || values.redPrefix || values.redPerRow) {
        if (!values.redTokens) {
          errors.redTokens = 'Please enter the number of red tokens if any other red token field is entered';
        } else if (isNaN(values.redTokens) || values.redTokens < 0) {
          errors.redTokens = 'Please enter a valid number of red tokens';
        }
    
        if (!values.redPrefix) {
          errors.redPrefix = 'Required if any red token field is entered';
        }
    
        if (!values.redPerRow || isNaN(values.redPerRow) || values.redPerRow < 1) {
          errors.redPerRow = 'Required and must be at least 1 if any red token field is entered';
        }
      }
    
      return errors;
    }
    
    
  });

  const [generatedTokens, setGeneratedTokens] = useState({ blue: [], red: [] });

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
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div className="content-container">
          <div className="input-section flex flex-col sm:flex-row justify-between gap-7">
            <div className="w-full sm:w-1/2">
              <label className="block mb-2 font-semibold">Number of blue tokens:</label>
              <input
                type="number"
                name="blueTokens"
                value={formik.values.blueTokens}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${formik.errors.blueTokens && formik.touched.blueTokens ? 'border-red-500' : 'focus:ring-blue-500'}`}
              />
              {formik.touched.blueTokens && formik.errors.blueTokens ? (
                <div className="text-red-500">{formik.errors.blueTokens}</div>
              ) : null}
              
              <label className="block mt-4 mb-2 font-semibold">Prefix for blue tokens:</label>
              <input
                type="text"
                name="bluePrefix"
                value={formik.values.bluePrefix}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${formik.errors.bluePrefix && formik.touched.bluePrefix ? 'border-red-500' : 'focus:ring-blue-500'}`}
              />
              {formik.touched.bluePrefix && formik.errors.bluePrefix ? (
                <div className="text-red-500">{formik.errors.bluePrefix}</div>
              ) : null}
              
              <label className="block mt-4 mb-2 font-semibold">Blue tokens per row:</label>
              <input
                type="number"
                name="bluePerRow"
                value={formik.values.bluePerRow}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${formik.errors.bluePerRow && formik.touched.bluePerRow ? 'border-red-500' : 'focus:ring-blue-500'}`}
              />
              {formik.touched.bluePerRow && formik.errors.bluePerRow ? (
                <div className="text-red-500">{formik.errors.bluePerRow}</div>
              ) : null}
            </div>
            <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
              <label className="block mb-2 font-semibold">Number of red tokens:</label>
              <input
                type="number"
                name="redTokens"
                value={formik.values.redTokens}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${formik.errors.redTokens && formik.touched.redTokens ? 'border-red-500' : 'focus:ring-red-500'}`}
              />
              {formik.touched.redTokens && formik.errors.redTokens ? (
                <div className="text-red-500">{formik.errors.redTokens}</div>
              ) : null}
              
              <label className="block mt-4 mb-2 font-semibold">Prefix for red tokens:</label>
              <input
                type="text"
                name="redPrefix"
                value={formik.values.redPrefix}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${formik.errors.redPrefix && formik.touched.redPrefix ? 'border-red-500' : 'focus:ring-red-500'}`}
              />
              {formik.touched.redPrefix && formik.errors.redPrefix ? (
                <div className="text-red-500">{formik.errors.redPrefix}</div>
              ) : null}
              
              <label className="block mt-4 mb-2 font-semibold">Red tokens per row:</label>
              <input
                type="number"
                name="redPerRow"
                value={formik.values.redPerRow}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-2 border rounded shadow-sm focus:outline-none ${formik.errors.redPerRow && formik.touched.redPerRow ? 'border-red-500' : 'focus:ring-red-500'}`}
              />
              {formik.touched.redPerRow && formik.errors.redPerRow ? (
                <div className="text-red-500">{formik.errors.redPerRow}</div>
              ) : null}
            </div>
          </div>
          <div className="buttons mt-8">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Generate
            </button>
            <button
              type="reset"
              className="bg-black text-white px-6 py-2 ml-4 rounded shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
      <div className="generated-tokens mt-12">
        <h2 className="text-xl font-bold mb-4">Generated Tokens</h2>
        {generatedTokens.blue.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Blue Tokens</h3>
          <div>
            {renderTokens(generatedTokens.blue, parseInt(formik.values.bluePerRow, 10), 'blue')}
          </div>
        </div>)}

        {generatedTokens.red.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Red Tokens</h3>
          <div>
            {renderTokens(generatedTokens.red, parseInt(formik.values.redPerRow, 10), 'red')}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default TokenGenerator;

