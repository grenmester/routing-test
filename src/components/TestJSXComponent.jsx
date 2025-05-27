import { useState } from 'react';

export default function TestComponent({ message = "Initial message" }) {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-blue-100 rounded text-blue-900">
      <p>{message}</p>
      <p className="mt-2">You clicked {count} times</p>
      <button
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
