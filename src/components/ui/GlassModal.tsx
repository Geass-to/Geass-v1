import styles from "../../styles/GlassModal.module.css";

interface GlassModalProps {
  width?: number;
  height?: number;
  count?: number;
  className?: string;
}

const GlassModal: React.FC<GlassModalProps> = ({
  width = 40,
  height = 600,
  count = 18,
  className = ""
}) => {
  const listItems = Array.from({ length: count }, (_, index) => {
    const isFirst = index === 0;
    const isLast = index === count - 1;
    return (
      <li
        key={index}
        className={`${styles.glassItem} ${isFirst ? styles.firstItem : ""} ${isLast ? styles.lastItem : ""}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      ></li>
    );
  });

  return <ul className={`z-50 flex ${className}`}>{listItems}</ul>;
};

export default GlassModal;
