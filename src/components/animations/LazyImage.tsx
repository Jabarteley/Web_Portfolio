import { useState, useEffect, useRef, memo } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  onLoad?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = memo(({
  src,
  alt,
  className = '',
  fallback,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setIsLoaded(true);
      onLoad?.();
    };

    img.onerror = () => {
      setHasError(true);
    };

    img.src = src;
  }, [src, onLoad]);

  if (hasError && fallback) {
    return <img src={fallback} alt={alt} className={className} />;
  }

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && (
        <div className="animate-pulse bg-slate-200 dark:bg-slate-700 w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full animate-spin" />
        </div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'} transition-opacity duration-300 object-cover object-center`}
        style={{ display: isLoaded ? 'block' : 'none' }}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;