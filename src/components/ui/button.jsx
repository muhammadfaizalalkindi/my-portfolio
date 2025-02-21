export function buttonVariants({ variant = "default", size = "default" }) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";
  const variants = {
    ghost: "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800",
    default: "bg-blue-500 text-white hover:bg-blue-600",
  };
  const sizes = {
    icon: "p-2",
    default: "px-4 py-2",
  };
  return `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.default}`;
}
