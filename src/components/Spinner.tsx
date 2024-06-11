export default function Spinner() {
  return (
    <div className="w-rounded-lg p-4 lg:overflow-visible">
      <svg className="h-8 w-8 animate-spin" viewBox="0 0 100 100">
        <circle
          fill="none"
          stroke-width="14"
          className="stroke-blue-300"
          cx="50"
          cy="50"
          r="40"
        />
        <circle
          fill="none"
          stroke-width="14"
          className="stroke-blue-600"
          stroke-dasharray="250"
          stroke-dashoffset="210"
          cx="50"
          cy="50"
          r="40"
        />
      </svg>
    </div>
  );
}
