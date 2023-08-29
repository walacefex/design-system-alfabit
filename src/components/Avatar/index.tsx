import React from 'react';
import classNames from 'classnames';
import { UserIcon } from '@heroicons/react/24/outline';

export type AvatarProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
} & React.HTMLAttributes<HTMLDivElement>;

const AvatarSizesMap = {
  xs: 'w-5 h-5',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-9 h-9',
}

const Avatar = ({size='xs', className, ...rest}: AvatarProps) => {
  const avatarSizeClass = AvatarSizesMap[size]
  return (
    <div 
      className={
        classNames('relative rounded-full bg-slate-100 flex items-center justify-center',
        avatarSizeClass, className)}
        {...rest}
      >
        <UserIcon className="absolute w-1/2 h-1/2" />
    </div>
  )
};

export default Avatar;