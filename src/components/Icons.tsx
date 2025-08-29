import { HugeiconsIcon } from '@hugeicons/react'
import { IconsProps } from '../interface'

export const Icons = ({ icon, size=16, color="#000", strokeWidth=1.5, fill = undefined }:IconsProps) => {
    return <HugeiconsIcon 
        icon={icon} 
        size={size} 
        color={color}
        strokeWidth={strokeWidth} 
        {...(fill!== undefined ? {fill}: {})}
        />
}
