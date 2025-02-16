interface StoryRingImageProps {
    imageUrl: string;
    altText: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const RingImage: React.FC<StoryRingImageProps> = ({
                                                           imageUrl,
                                                           altText,
                                                           size = 'md',
                                                           className = '',
                                                       }) => {
    const sizes = {
        sm: {
            wrapper: 'w-16 h-16',
            image: 'w-14 h-14',
        },
        md: {
            wrapper: 'w-24 h-24',
            image: 'w-22 h-22',
        },
        lg: {
            wrapper: 'w-32 h-32',
            image: 'w-30 h-30',
        },
    };

    return (
        <div
            className={`${sizes[size].wrapper} rounded-full p-[3px] bg-gradient-to-tr from-[#f17587] via-[#f68058] to-[#fe901a] ${className}`}
        >
            <div className="h-full w-full rounded-full p-0.5 bg-white">
                <img
                    src={imageUrl}
                    alt={altText}
                    className={`rounded-full object-cover`}
                />
            </div>
        </div>
    );
};

export default RingImage;
