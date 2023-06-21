const Tooltip = ({ children, tooltip = 'Đừng quên thêm tooltip' }) => {
  return (
    <div data-tooltip-content={tooltip} data-tooltip-id="tooltip">
      {children}
    </div>
  );
};

export default Tooltip;
