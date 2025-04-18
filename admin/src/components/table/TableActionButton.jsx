import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const TableActionButton = ({ onEdit, onDelete, onView }) => {
  const actions = [
    {
      condition: onView,
      onClick: onView,
      icon: <FaEye />,
      className: "text-info bg-info/30",
    },
    {
      condition: onEdit,
      onClick: onEdit,
      icon: <FaEdit />,
      className: "text-success bg-success/30",
    },
    {
      condition: onDelete,
      onClick: onDelete,
      icon: <FaTrashAlt />,
      className: "text-danger bg-danger/30",
    },
  ];

  return (
    <div className="flex gap-2">
      {actions
        .filter((action) => action.condition)
        .map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`p-2 rounded-lg ${action.className} flex items-center justify-center hover:scale-105 active:scale-95 transition-all `}
          >
            {action.icon}
          </button>
        ))}
    </div>
  );
};

export default TableActionButton;
