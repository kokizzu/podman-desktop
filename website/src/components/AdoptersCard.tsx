import ThemedImage from '@theme/ThemedImage';
import React from 'react';

interface AdoptersCardProps {
  readonly logo: string;
  readonly logoDark?: string; // Optional dark mode logo
  readonly alt: string;
  readonly width: string;
  readonly height: string;
}

function AdoptersCard({ logo, logoDark, alt, width, height }: AdoptersCardProps): JSX.Element {
  return (
    <div className="flex items-center">
      <ThemedImage
        alt={alt}
        sources={{
          light: logo,
          dark: logoDark ?? logo,
        }}
        style={{ width, height, opacity: 1 }}
      />
    </div>
  );
}
export default AdoptersCard;
