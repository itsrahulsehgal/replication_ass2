import Image from 'next/image'

export default function Header() {
    return (
        
            <div className="bg-[linear-gradient(128deg,_#159c98_38%,#138f9e_103%)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-start relative w-full items-start px-[294px] py-8">
                <div className="whitespace-nowrap text-6xl font-'Poppins' font-semibold text-white ml-40 relative">
                    Backed by the best
                </div>
                <div className="whitespace-nowrap text-3xl font-'Poppins' font-light text-white relative mb-5 ml-40">
                    Wealthup is backed and supported by
                </div>
                <Image
                    src="https://file.rendit.io/n/CnPxCegXHyzLzMTgmwhl.png"
                    className="min-h-0 min-w-0 self-end relative"
                    alt='Image'
                />
            </div>
        
    )
}