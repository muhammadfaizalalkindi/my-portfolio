export function Separator({ orientation = "horizontal", className = "" }) {
  const orientationClass = orientation === "vertical" ? "w-px h-full" : "h-px w-full";
  return <div className={`bg-gray-300 dark:bg-gray-600 ${orientationClass} ${className}`} />;
}
