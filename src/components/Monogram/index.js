import classNames from 'classnames';
import { useId } from 'hooks';
import './index.css';

function Monogram({ highlight, className, ...props }) {
  const id = useId();
  const clipId = `monogram-clip-${id}`;

  return (
    <svg
      aria-hidden
      className={classNames('monogram', className)}
      width="46"
      height="39"
      viewBox="0 0 36 39"
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 27.648 32.256 c 0 1.2722 -1.0303 2.304 -2.304 2.304 H 2.304 c -0.8935 0 -1.7078 -0.5175 -2.0858 -1.3262 c -0.3802 -0.81 -0.2565 -1.7662 0.315 -2.4523 l 19.8936 -23.868 H 2.304 c -1.2737 0 -2.304 -1.0318 -2.304 -2.304 s 1.0303 -2.304 2.304 -2.304 h 23.04 c 0.8935 0 1.7078 0.5175 2.0858 1.3262 c 0.3802 0.81 0.2565 1.7662 -0.315 2.4523 L 7.2216 29.952 H 25.344 C 26.6184 29.952 27.648 30.9816 27.648 32.256 z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className="monogram__highlight" width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
}

export default Monogram;
