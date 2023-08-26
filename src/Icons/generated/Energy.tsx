import PropTypes from "prop-types";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  size?: string;
}
const Energy = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      paintOrder="stroke fill markers"
      viewBox="-30 -20 500 500"
      height={props.size || 16}
      width={props.size || 16}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M211.406 436.526c-2.402-2.572-3.027-7.384-5.033-10.492-2.38-3.69-5.3-6.987-7.828-10.568-3.312-4.695-7.093-9.054-10.44-13.736-5.726-8.007-12.229-14.967-19.081-22.02-16.815-17.312-34.377-33.318-54.334-46.98-30.92-21.168-63.694-39.695-98.837-52.885-2.439-.915 0 0-15.853-7.748 2.992-4.806 21.448-30.966 25.774-37.908 7.225-11.593 12.42-24.268 17.804-36.78 6.854-15.93 12.994-32.237 17.91-48.866 6.277-21.243 11.55-42.794 15.618-64.572 1.132-6.062 7.872-57.414 11.893-83.688 35.273 10.169 23.174 7.102 31.173 9.166 22.159 5.721 45.406 6.85 68.15 8.601 12.963.999 25.81.9 38.793.7 19.303-.297 38.646-1.21 57.783-3.864 9.526-1.321 19.014-3.12 28.33-5.513 7.373-1.894 12.123-2.96 27.929-9.09 1.743 6.78 19.708 130.486 43.887 187.366 9.562 22.493 38.407 71.889 47.47 83.038-12.888 4.825-64.739 28.657-91.663 44.666-33.069 19.663-64.332 43.76-90.14 72.401-12.18 13.518-21.737 29.346-31.578 44.583-3.84 5.944-5.32 6.751-7.727 4.19zm10.34-49.414c6.863-35.947 26.661-81.689 57.558-132.975 10.423-17.3 30.243-46.992 42.27-63.326 7.459-10.129 9.851-13.863 9.851-15.378 0-1.128-.428-2.164-.984-2.377-.541-.208-5.325.41-10.631 1.376-32.573 5.92-65.72 7.888-91.484 5.432-11.66-1.111-20.197-2.515-21.162-3.478-.683-.684 1.955-17.361 4.103-25.94 8.986-35.893 29.973-73.608 56.785-102.046 4.13-4.38 7.34-8.13 7.137-8.334-.205-.204-2.746.39-5.649 1.32-34.024 10.905-71.853 12.001-99.09 2.872-3.72-1.247-6.862-2.172-6.986-2.058-.122.115.149 3.804.602 8.2 4.272 41.354-15.366 95.567-56.564 156.15-6.195 9.112-18.317 25.405-25.358 34.088-2.84 3.502-4.053 5.476-3.45 5.615.51.12 5.718-1.004 11.573-2.494 16.713-4.255 30.695-6.866 49.796-9.3 14.614-1.86 50.604-1.691 63.113.298 8.136 1.293 19.394 3.788 20.05 4.444.134.135-.192 1.577-.726 3.205-2.83 8.624-6.468 25.773-8.144 38.396-3.223 24.26-3.22 63.313.005 92.137 1.268 11.337 3.516 25.878 4.162 26.922.55.887.836-.245 3.224-12.748z" />
    </svg>
  );
};
Energy.propTypes = {
  title: PropTypes.string,
};
export default Energy;
