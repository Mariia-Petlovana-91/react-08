import clsx from 'clsx';

export default function onActiveClass( isActive, standart, active ) {
  return clsx(standart, isActive && active);
};