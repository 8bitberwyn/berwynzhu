const AnimationElement = () => {
  return (
    <div className="animation-elements">
      {Array(5).fill().map((_, i) => (
        <div
          key={i}
          className={`animation-element element-${i + 1}`}
          style={{
            left: `${(i + 1) * 15}%`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
    </div>
  )
};

export default AnimationElement;