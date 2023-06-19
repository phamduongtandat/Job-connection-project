const Avatar = ({ className = 'w-32 text-7xl' }) => {
  return (
    <div
      className={`w-32 aspect-square mx-auto rounded-full flex items-center justify-center ${className}`}
      style={{ background: '#7b1fa2', color: 'white' }}
    >
      L
    </div>
  );
};

export default Avatar;
