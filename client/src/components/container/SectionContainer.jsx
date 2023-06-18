const SectionContainer = ({ className, wrapperClassName, children }) => {
  return (
    <section className={wrapperClassName}>
      <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>
    </section>
  );
};

export default SectionContainer;
