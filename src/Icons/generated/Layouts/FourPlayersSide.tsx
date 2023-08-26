import PropTypes from 'prop-types';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string;
}
const FourPlayersSide = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 16}
      height={props.size || 16}
      viewBox="0 0 802 1374"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M159.5 19.1c-17.6 1.8-34.7 7.2-52.2 16.4-14.4 7.5-25 15.3-36.8 27-20.3 20.4-33.6 45.2-40.7 76l-2.3 10-.3 531.5c-.2 382 0 534.3.8 541.5 2.2 20.1 7.2 36.4 16.5 54.3 7.3 14 15.2 24.6 26.7 36.1 20.1 20.1 41 31.8 70.8 39.8l10.5 2.8h497l11.7-3.2c27-7.4 47-18.5 66.9-37.1 21.5-20.2 37-48.2 43.6-79.2 1.7-8.1 1.8-30.9 1.8-548 0-518.6-.1-539.8-1.8-548-12-55.7-49.8-97.4-103.5-114.4-20.5-6.4-.6-6-262.7-6.2-130.9-.1-241.6.2-246 .7zm124 41.2c.1 21 5.7 36.8 16.7 47.4 14.3 13.6 60.7 25.4 100.3 25.4 23.7 0 42.4-2.7 66.7-9.7 23.4-6.7 35.7-15 42.3-28.8 5-10.6 6.6-17.6 7.2-32.9l.6-13.8 62.1.3c61.6.3 62.2.3 71.6 2.7 48.7 12.2 83.1 48.6 91.5 96.8 1.3 7.3 1.5 26.3 1.5 124.9V389l-343.2-.2-343.3-.3V271c0-109.1.1-118.1 1.8-126 9.2-43.6 38.7-77 80.4-91 16.6-5.5 20.3-5.8 84.8-5.9l59-.1v12.3zM396 687v289H57V805.3l12.8-.6c19.8-.9 33.6-5.6 43.8-15C128.7 776 141.1 730 141.1 688c0-23.9-3.5-47.1-10.7-71-9.6-31.9-26-44.4-60.1-45.7l-13.3-.6V398h339v289zm348-202.8v86.3h-12.3c-14.9.1-24.8 2.2-35.5 7.5-13.1 6.6-19.9 15.8-26.6 36-13.2 40-15.3 83.2-6 124.8 5.8 25.6 11.8 39.8 20.8 48.8 11.1 11 23.1 15.3 45.4 16.1l14.2.6V976H405V398h339v86.2zm0 617.2c0 127.7.1 124.4-6.1 143-13.4 40-47.4 70-89.9 79.2-6.3 1.4-17 1.7-68.6 2.1l-61.1.4-.7-8.6c-.8-10.3-4.3-23-8.2-30-8.3-14.9-24-23.3-57.9-30.9-23.8-5.4-54.3-7.2-76-4.6-21.2 2.5-48 9.3-60.9 15.5-18.5 8.7-28.1 24.5-30.3 49.6l-.8 8.4-53 .3c-57.6.3-70.7-.4-85.4-4.3-24.3-6.6-47.8-22.5-63.5-43-7.7-10.1-16.6-27.7-19.6-38.6-5-18.4-5-18.6-5-140.7V985h687v116.4z" />
      <path d="M391.8 148c-16.5 3-30 12.2-39.1 26.7-7.9 12.6-10 31-5.2 46.1 4.5 14.4 15.5 26.9 29.1 33.4 22.1 10.4 46.1 6.2 63.5-11.1 11.5-11.5 16.9-24.2 16.9-39.9 0-23.4-16.1-45.5-38.6-53.1-7.1-2.3-19.8-3.4-26.6-2.1zM198 632.6c-18.6 4.9-33.7 19-40.1 37.4-1.7 5-2.2 8.9-2.3 16.5-.1 12.8 2.5 21.5 9.4 31.8 10.7 16 27 24.7 46.4 24.7 27.2 0 49.5-18 55.1-44.6 1.8-8.7 1.8-14.1 0-22.6-4.4-21.2-22.5-39.4-43.3-43.7-7.2-1.5-18.5-1.3-25.2.5zM570.1 634.5c-14.3 4.6-27 15.7-33.3 29.1-10.4 22.2-6.2 46.1 11.1 63.5 11.5 11.5 24.2 16.9 39.9 16.9 23.6 0 45.3-15.9 53.3-39 3.1-9.2 3.2-23.7.1-33.7-3.9-12.7-12.9-24.1-24.9-31.6-12.5-7.9-31.4-10-46.2-5.2zM388.3 1125.5c-10.8 2.3-19 7-27.6 15.6-11.4 11.4-16.7 23.9-16.7 39.7 0 23.6 15.9 45.3 39 53.3 9.2 3.1 23.7 3.2 33.7.1 12.7-3.9 24.1-12.9 31.6-24.9 7.9-12.6 10-31 5.2-46.1-8.6-27.2-37.2-43.8-65.2-37.7z" />
    </svg>
  );
};
FourPlayersSide.propTypes = {
  title: PropTypes.string,
};
export default FourPlayersSide;
