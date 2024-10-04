import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { svgAnimation } from '@/data/animations';

export default function Loading() {
  const [show, setShow] = useState(true);
  setTimeout(() => setShow(false), 300);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {/* if you want to create svg https://danmarshall.github.io/google-font-to-svg-path/ */}
      <svg
        width="255"
        height="77"
        viewBox="0 0 255 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <AnimatePresence>
          {show && (
            <motion.path
              {...svgAnimation}
              d="M 127.8 69 L 121.6 75 L 94.7 47.3 L 94.7 74 L 85.7 74 L 85.7 0 L 94.7 0 L 94.7 42.3 L 118.2 21 L 123.4 26.7 L 103.3 44.5 L 127.8 69 Z M 49.7 71 L 40.8 75.2 L 32.1 56.2 A 30.586 30.586 0 0 0 29.509 51.626 Q 27.003 48.022 23.8 46.1 Q 19.445 43.487 12.964 43.15 A 37.847 37.847 0 0 0 11 43.1 L 9.5 43.1 L 9.5 74 L 0 74 L 0 4.2 Q 5.3 3.7 10.15 3.45 A 187.94 187.94 0 0 1 16.466 3.235 A 226.267 226.267 0 0 1 20.5 3.2 Q 33.3 3.2 39.75 8.4 A 17.414 17.414 0 0 1 44.38 13.934 Q 46.2 17.444 46.2 21.8 A 19.88 19.88 0 0 1 45.549 27.02 A 14.672 14.672 0 0 1 41.85 33.55 Q 37.5 38 29.3 40.2 A 23.656 23.656 0 0 1 32.729 42.063 A 20.427 20.427 0 0 1 34.1 43.05 Q 36.069 44.597 37.905 47.11 A 29.29 29.29 0 0 1 38.15 47.45 Q 40.1 50.2 42.1 54.6 L 49.7 71 Z M 136.3 55.8 L 136.3 22 L 145.3 22 L 145.3 54.6 A 22.981 22.981 0 0 0 145.554 58.134 Q 145.842 59.981 146.457 61.469 A 10.136 10.136 0 0 0 147.9 63.95 A 8.404 8.404 0 0 0 153.013 66.971 A 12.807 12.807 0 0 0 155.5 67.2 Q 159.6 67.2 163.45 65.55 Q 167.3 63.9 170.3 61.1 L 170.3 22 L 179.3 22 L 179.3 60.5 A 15.602 15.602 0 0 0 179.402 62.354 Q 179.734 65.116 181.15 66.15 Q 183 67.5 185.2 67.5 L 183.3 74.5 Q 174 74.5 171.8 67.1 Q 168.3 70.7 163.7 72.95 Q 159.1 75.2 153.8 75.2 Q 149.3 75.2 145.3 73.3 A 14.441 14.441 0 0 1 139.79 68.661 A 18.266 18.266 0 0 1 138.8 67.15 A 16.24 16.24 0 0 1 137.136 63.057 Q 136.3 59.905 136.3 55.8 Z M 276.2 51.7 L 239.8 51.7 A 24.088 24.088 0 0 0 240.939 56.725 Q 242.275 60.538 244.9 63.1 Q 249.1 67.2 256 67.2 Q 260.5 67.2 264.1 66.25 Q 267.7 65.3 271 63.8 L 273.1 71.5 A 40.77 40.77 0 0 1 268.765 73.126 A 51.863 51.863 0 0 1 265 74.15 A 38.914 38.914 0 0 1 259.908 74.969 A 52.025 52.025 0 0 1 254.9 75.2 A 28.318 28.318 0 0 1 247.154 74.195 A 21.108 21.108 0 0 1 237.15 68.05 A 23.521 23.521 0 0 1 231.945 58.51 Q 230.6 53.845 230.6 48 A 35.359 35.359 0 0 1 231.433 40.178 A 28.84 28.84 0 0 1 233.55 34.05 A 24.642 24.642 0 0 1 238.566 26.968 A 22.887 22.887 0 0 1 241.8 24.35 A 21.048 21.048 0 0 1 252.059 20.878 A 26.205 26.205 0 0 1 254.1 20.8 Q 261.6 20.8 266.55 24.05 Q 271.5 27.3 274 32.8 A 28.185 28.185 0 0 1 276.426 42.664 A 33.434 33.434 0 0 1 276.5 44.9 A 75.204 75.204 0 0 1 276.209 51.597 A 69.426 69.426 0 0 1 276.2 51.7 Z M 206.2 74 L 197.2 74 L 197.2 22 L 205.9 22 L 205.9 33.3 Q 207.2 30 209.4 27.15 Q 211.6 24.3 214.9 22.55 A 14.817 14.817 0 0 1 219.58 21.026 A 19.459 19.459 0 0 1 222.6 20.8 Q 224.1 20.8 225.6 20.95 A 18.972 18.972 0 0 1 226.655 21.084 Q 227.155 21.162 227.582 21.262 A 8.817 8.817 0 0 1 228.1 21.4 L 225.4 30.7 A 9.763 9.763 0 0 0 223.255 30.088 Q 222.159 29.9 220.9 29.9 A 12.958 12.958 0 0 0 214.27 31.746 A 15.609 15.609 0 0 0 213.85 32 Q 210.522 34.086 208.378 38.442 A 22.927 22.927 0 0 0 208.35 38.5 Q 206.587 42.107 206.27 47.328 A 39.09 39.09 0 0 0 206.2 49.7 L 206.2 74 Z M 69.7 74 L 60.7 74 L 60.7 22 L 69.7 22 L 69.7 74 Z M 297.5 74 L 288.5 74 L 288.5 22 L 297.5 22 L 297.5 74 Z M 9.5 11.6 L 9.5 35.1 L 20.5 35.1 A 26.489 26.489 0 0 0 25.423 34.669 Q 29.352 33.925 32.2 31.9 Q 36.7 28.7 36.7 22.7 A 9.811 9.811 0 0 0 33.427 15.236 A 13.272 13.272 0 0 0 32.5 14.45 A 13.923 13.923 0 0 0 28.136 12.228 Q 26.207 11.618 23.877 11.37 A 31.944 31.944 0 0 0 20.5 11.2 Q 17.326 11.2 14.762 11.287 A 118.974 118.974 0 0 0 14.4 11.3 Q 11.7 11.4 9.5 11.6 Z M 239.7 44.4 L 268.2 44.4 A 24.355 24.355 0 0 0 267.796 39.815 Q 267.3 37.231 266.196 35.207 A 12.422 12.422 0 0 0 264.4 32.7 A 12.488 12.488 0 0 0 257.439 28.924 A 18.395 18.395 0 0 0 253.9 28.6 A 13.58 13.58 0 0 0 248.788 29.535 A 12.524 12.524 0 0 0 244.3 32.65 Q 240.5 36.7 239.7 44.4 Z M 60.837 11.288 A 5.973 5.973 0 0 0 65.2 13.1 A 8.175 8.175 0 0 0 66.696 12.969 A 5.647 5.647 0 0 0 69.8 11.35 Q 71.5 9.6 71.5 6.8 A 7.26 7.26 0 0 0 71.5 6.719 A 6.06 6.06 0 0 0 69.65 2.35 A 7.395 7.395 0 0 0 69.592 2.293 A 6.059 6.059 0 0 0 65.2 0.5 A 8.264 8.264 0 0 0 63.544 0.658 A 5.661 5.661 0 0 0 60.6 2.2 A 5.588 5.588 0 0 0 59.129 4.832 A 7.987 7.987 0 0 0 58.9 6.8 A 5.992 5.992 0 0 0 59.392 9.219 A 6.643 6.643 0 0 0 60.75 11.2 A 7.466 7.466 0 0 0 60.837 11.288 Z M 288.637 11.288 A 5.973 5.973 0 0 0 293 13.1 A 8.175 8.175 0 0 0 294.496 12.969 A 5.647 5.647 0 0 0 297.6 11.35 Q 299.3 9.6 299.3 6.8 A 7.26 7.26 0 0 0 299.3 6.719 A 6.06 6.06 0 0 0 297.45 2.35 A 7.395 7.395 0 0 0 297.392 2.293 A 6.059 6.059 0 0 0 293 0.5 A 8.264 8.264 0 0 0 291.344 0.658 A 5.661 5.661 0 0 0 288.4 2.2 A 5.588 5.588 0 0 0 286.929 4.832 A 7.987 7.987 0 0 0 286.7 6.8 A 5.992 5.992 0 0 0 287.192 9.219 A 6.643 6.643 0 0 0 288.55 11.2 A 7.466 7.466 0 0 0 288.637 11.288 Z"
              strokeWidth="4"
              className="stroke-primary-light"
            />
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}
