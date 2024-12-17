import React from "react";

interface ChipProps {
  label: string;
  onDelete?: () => void;
}

export const Chip = ({ label, onDelete }: ChipProps) => {
  return (
    <div className="inline-flex items-center bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
      <span>{label}</span>
      {onDelete && (
        <button
          className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onDelete}
        >
          &times;
        </button>
      )}
    </div>
  );
}; 