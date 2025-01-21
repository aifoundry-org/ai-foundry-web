import Link from 'next/link'
import IMGBackground from '@/public/pngs/termsAndConditions/backgroundMobile.png'

const paragraphStyle = 'font-host-grotesk font-normal text-[3.75vw]'

export default function main() {
    return (
        <div className='md:hidden flex flex-col w-full h-full font-dharma-gothic-e'>
            <div className='flex flex-col w-[87.2vw] h-[51.2vw] mx-auto my-[6vw]'>
                <div className='flex w-full text-center justify-center relative'>
                    <img className='absolute top-[3vw] left-[4vw] w-[75vw] z-0' src={IMGBackground.src} />
                    <div className='flex text-[11.215vw] font-black leading-[10.67vw] uppercase pt-[13vw] pb-[7vw] z-[1]'>
                        Applicable Terms &<br/>Conditions
                    </div> 
                </div>
                <div className='flex flex-col w-full h-full gap-[3vw]'>
                    <div className='flex flex-row w-full h-full gap-[8.55vw] justify-center'>
                        <Link href='#community-code-mobile' className='text-[5.35vw] leading-[5.35vw] font-bold uppercase'>Community code of conduct</Link>
                        <Link href='#privacy-policy-mobile' className='text-[5.35vw] leading-[5.35vw] font-bold uppercase'>Privacy policy</Link>
                    </div>
                    <div className='flex flex-row w-full h-full gap-[8.55vw] justify-center'>
                        <Link href='' className='text-[5.35vw] leading-[5.35vw] font-bold uppercase'>Terms of use</Link>
                        <Link href='' className='text-[5.35vw] leading-[5.35vw] font-bold uppercase'>Cookie policy</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[87.2vw] mx-auto mt-[15vw] mb-[5.8vw]'>
                <h2 className='relative'>
                    <div className='absolute left-0 -top-[30vw]' id='community-code-mobile' />
                    Community Code of Conduct
                </h2>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>Last updated June 2, 2024</p>
                <h3 className='mt-[8.55vw]'>Our Pledge</h3>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>
                    We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.
                    We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
                </p>
                <h3 className='mt-[8.55vw] relative'>
                    <div id='privacy-policy-mobile' className='absolute -top-[30vw] left-0' />
                    Privacy Policy
                </h3>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>Last updated June 2, 2024</p>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>
                    We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex {<Link className='underline' href='#'>characteristics, gender identity and expression</Link>}, level of experience, education, socio-economic status, nationality, personal appearance, race, caste, color, religion, or sexual identity and orientation.
                    We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.
                </p>
                <h3 className='mt-[8.55vw]'>Table of Contents</h3>
                <div className={`${paragraphStyle} mt-[4.27vw] mb-[40vw]`}>
                    <ol>
                        <li><Link className='underline' href=''>What information do we collect?</Link></li>
                        <li><Link className='underline' href=''>How do we process your information?</Link></li>
                        <li><Link className='underline' href=''>What legal bases do we rely on to process your personal information?</Link></li>
                        <li><Link className='underline' href=''>When and with whom do we share your personal information?</Link></li>
                        <li><Link className='underline' href=''>Do we use cookies and other tracking technologies?</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}