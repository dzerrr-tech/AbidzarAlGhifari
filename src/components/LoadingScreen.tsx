type LoadingScreenProps = {
  visible: boolean;
};

export default function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <div className={`loading-screen ${visible ? "" : "loading-hidden"}`} aria-hidden={!visible}>
      <div className="loading-walker">
        <svg className="walker-svg" viewBox="0 0 100 130" aria-hidden="true">
          <ellipse className="walker-shadow" cx="50" cy="122" rx="20" ry="5" />
          <circle className="walker-head" cx="50" cy="20" r="9" />
          <line className="walker-body" x1="50" y1="29" x2="50" y2="72" />
          <line className="walker-arm walker-arm-left" x1="50" y1="40" x2="34" y2="60" />
          <line className="walker-arm walker-arm-right" x1="50" y1="40" x2="66" y2="60" />
          <line className="walker-leg walker-leg-left" x1="50" y1="72" x2="34" y2="112" />
          <line className="walker-leg walker-leg-right" x1="50" y1="72" x2="66" y2="112" />
        </svg>
        <div className="walker-ground" />
      </div>
      <div className="loading-text">
        <span>Loading</span>
        <span className="loading-dots">
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}
