import Icons from '../assets/symbol-defs.svg';

export const Icon = ({name, ...params}) => (
  <svg className={`icon icon-${name}`} {...params} >
    <use xlinkHref={Icons + `#${name}`} />
  </svg>
);