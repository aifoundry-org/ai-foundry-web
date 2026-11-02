import Image from 'next/image';

export default function ImageWrapper({src, alt, style, className, onClick, unoptimized}: {src: string, alt: string, style?: {[key:string]: string}, className?: string, onClick?: () => void, unoptimized?: boolean}) {
    return (
        <Image onClick={onClick} className={className} width="0" height="0" sizes="100vw" style={{width: '100%', height: 'auto', ...style}} src={src} alt={alt} loading='lazy' unoptimized={unoptimized} />
    )
}