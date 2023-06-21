const Avatar = ({ className = 'w-32 text-7xl', content = 'L' }) => {
  return (
    <div
      className={`aspect-square mx-auto rounded-full flex items-center text-white justify-center ${className}`}
    >
      {content}
    </div>
  );
};

export default Avatar;
