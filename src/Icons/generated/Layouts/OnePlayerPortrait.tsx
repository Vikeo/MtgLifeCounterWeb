import PropTypes from 'prop-types';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string;
}
const OnePlayerPortrait = ({
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
      <path d="M159.5 19.1c-17.6 1.8-34.7 7.2-52.2 16.4-14.4 7.5-25 15.3-36.8 27-20.3 20.4-33.6 45.2-40.7 76l-2.3 10-.3 531.5c-.2 382 0 534.3.8 541.5 2.2 20.1 7.2 36.4 16.5 54.3 7.3 14 15.2 24.6 26.7 36.1 20.1 20.1 41 31.8 70.8 39.8l10.5 2.8h497l11.7-3.2c27-7.4 47-18.5 66.9-37.1 21.5-20.2 37-48.2 43.6-79.2 1.7-8.1 1.8-30.9 1.8-548 0-518.6-.1-539.8-1.8-548-12-55.7-49.8-97.4-103.5-114.4-20.5-6.4-.6-6-262.7-6.2-130.9-.1-241.6.2-246 .7m492 31.8c5 1.3 13.2 4.1 18.4 6.2 38.5 15.7 65.4 49.3 72.6 90.6 1.3 7.5 1.5 73.4 1.5 539.3 0 474.6-.2 531.7-1.5 539.6-8.5 48.4-45.4 86.3-94.5 97-6.3 1.4-17 1.7-68.6 2.1l-61.1.4-.7-9c-.8-10.6-4.3-23.4-8.2-30.6-8.3-14.9-24-23.3-57.9-30.9-23.8-5.4-54.3-7.2-76-4.6-21.2 2.5-48 9.3-60.9 15.5-18.6 8.8-28.2 24.8-30.4 50.2l-.7 8.8-53 .3c-30.9.2-57.8-.2-64.5-.8-56.5-5-101.1-48.5-108-105.2-.8-6.8-1-151.9-.8-538.8l.3-529.5 2.2-9c2.9-12 5.2-18.5 10.3-28.6C83.9 86 109.2 64.3 139.7 54c18.5-6.2 3.5-5.8 264.3-5.6l238.5.1z" />
      <path d="M388.3 1124.5c-10.8 2.3-19 7-27.6 15.6-11.4 11.4-16.7 23.9-16.7 39.7 0 23.6 15.9 45.3 39 53.3 9.2 3.1 23.7 3.2 33.7.1 12.7-3.9 24.1-12.9 31.6-24.9 7.9-12.6 10-31 5.2-46.1-8.6-27.2-37.2-43.8-65.2-37.7" />
    </svg>
  );
};
OnePlayerPortrait.propTypes = {
  title: PropTypes.string,
};
export default OnePlayerPortrait;
