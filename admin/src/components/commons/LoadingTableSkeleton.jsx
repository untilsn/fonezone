import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingTableSkeleton = ({ rows = 10, columnCount = 5 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="animate-pulse">
          {Array.from({ length: columnCount }).map((_, colIndex) => (
            <td key={colIndex} className="px-4 py-3">
              <div className="w-full h-4 bg-gray-200 rounded dark:bg-gray-300" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default LoadingTableSkeleton;
