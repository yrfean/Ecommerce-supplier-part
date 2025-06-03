import { useState } from "react";

const Mock = () => {
  const [selectedFruits, setSelectedFruits] = useState([]);

  const handleChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedFruits(values);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <label
        htmlFor="fruits"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select your favorite fruits
      </label>

      <select
        id="fruits"
        name="fruits"
        multiple
        onChange={handleChange}
        className="w-full h-40 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
      >
        <input type="checkbox" name="" id="" />
      </select>

      <div className="mt-4">
        <h2 className="text-sm font-medium text-gray-700">Selected:</h2>
        <ul className="list-disc list-inside text-gray-600">
          {selectedFruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mock;
