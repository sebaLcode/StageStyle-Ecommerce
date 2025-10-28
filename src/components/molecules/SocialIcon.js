import React from 'react';

const SocialIcon = ({ platform, href, className = '' }) => {
  const getIconClass = () => {
    const icons = {
      instagram: 'bi bi-instagram',
      facebook: 'bi bi-facebook',
      pinterest: 'bi bi-pinterest',
      tiktok: 'bi bi-tiktok'
    };
    return icons[platform] || 'bi bi-link';
  };

  return (
    <a href={href} className={`${platform} ${className}`}>
      <i className={getIconClass()}></i>
    </a>
  );
};

export default SocialIcon;