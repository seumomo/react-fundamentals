const logoImage = {
  src: '/src/assets/react.svg',
  alt: '리액트',
};

const figureStyle = {
  marginBlock: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
};

const figcaptionStyle = { whiteSpace: 'nowrap' };

function Logo() {
  const onlyRenderImage = false;

  const handleEnter = e => {
    const element = e.currentTarget;
    element.style.scale = 1.5;
  };

  const handleLeave = e => {
    const element = e.currentTarget;
    element.style.scale = 1;
  };

  if (onlyRenderImage) {
    return <img src={logoImage.src} alt="" />;
  }

  return (
    <figure
      style={figureStyle}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}>
      <img src={logoImage.src} alt="" />
      {onlyRenderImage || (
        <figcaption style={figcaptionStyle}>{logoImage.alt}</figcaption>
      )}
    </figure>
  );
}

export default Logo;
