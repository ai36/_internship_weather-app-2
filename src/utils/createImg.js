export const createImg = ({ src = '', className = '', alt = '' }) => {
  return <img className={className} src={src} alt={alt} />;
};
