import { useState, useEffect } from "react";

export default function LoadingBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0;
        }
        return prevProgress + 1;
      });
    }, 16);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div
        className="bg-customBlue h-1.5 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
