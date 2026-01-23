type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Button({onClick, children, variant = "primary", size = "md", className = ""}: ButtonProps) {
  const baseClasses =
    "text-white rounded transition-colors cursor-pointer border-none";

  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2",
    lg: "px-4 py-2 rounded-lg",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
