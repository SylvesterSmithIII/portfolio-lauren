import Image from 'next/image';
import { StaticImageData } from 'next/image';

export default function Card({ link, alt, title, description }: {link: string, alt: string, title: string, description: string}) {
    return (
        <div className="w-[320px] h-[430px] border-black border-2 flex flex-col p-4 gap-3 bg-white">
            <div className="ml-auto">
                <button className="text-xs font-semibold p-1 border-2 border-black rounded-2xl">ARTWORK</button>
            </div>
            <div className="w-full h-[250px] relative">
                <Image src={link} alt={alt} fill className="object-cover " sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
            </div>
            <div>
                <h1 className='text-lg'>{title}</h1>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    );
}
