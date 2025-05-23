import Link from 'next/link'
import IMGBackground from '@/public/imgs/termsAndConditions/backgroundMobile.webp'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

const paragraphStyle = 'font-host-grotesk font-normal text-[3.75vw]'

export default function Main() {
    return (
        <div className='md:hidden flex flex-col w-full h-full font-dharma-gothic-e'>
            <div className='flex flex-col w-[87.2vw] h-[51.2vw] mx-auto my-[6vw]'>
                <div className='flex w-full text-center justify-center relative'>
                    <div className='absolute top-[3vw] left-[4vw] w-[75vw] z-0'>
                        <ImageWrapper src={IMGBackground.src} alt='Background' />
                    </div>
                    <div className='flex text-[11.215vw] font-black leading-[10.67vw] uppercase pt-[13vw] pb-[7vw] z-[1]'>
                        Applicable Terms &<br/>Conditions
                    </div> 
                </div>
                <div className='flex flex-col w-full h-full gap-[3vw]'>
                    <div className='flex flex-row w-full h-full gap-[8.55vw] justify-center'>
                        <Link href='#coc-mobile' className='text-[5.35vw] leading-[5.35vw] font-bold uppercase'>Community code of conduct</Link>
                        <Link href='#privacy-policy-mobile' className='text-[5.35vw] leading-[5.35vw] font-bold uppercase'>Privacy policy</Link>
                    </div>
                    <div className='flex flex-row w-full h-full gap-[8.55vw] justify-center'>
                        <Link href='#terms-of-use-mobile' className='text-[5.35vw] leading-[5.35vw] font-bold uppercase'>Terms of use</Link>
                        <Link href='#cookie-policy-mobile' className='text-[5.35vw] leading-[5.35vw] font-bold uppercase'>Cookie policy</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[87.2vw] mx-auto mt-[15vw] mb-[5.8vw]'>
                <h2 className='relative'>
                    <div className='absolute left-0 -top-[30vw]' id='coc-mobile' />
                    Community Code of Conduct
                </h2>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>Last updated June 2, 2024</p>
                <h3 className='mt-[8.55vw]'>Our Pledge</h3>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>
                    We as members, contributors, and leaders pledge to make participation in our
                    community a harassment-free experience for everyone, regardless of age, body
                    size, visible or invisible disability, ethnicity, sex characteristics, gender
                    identity and expression, level of experience, education, socio-economic status,
                    nationality, personal appearance, race, caste, color, religion, or sexual
                    identity and orientation.
                    <br/>
                    <br/>
                    We pledge to act and interact in ways that contribute to an open, welcoming,
                    diverse, inclusive, and healthy community.
                </p>
                <h3 className='mt-[8.55vw]'>
                    Our Standards
                </h3>
                <div className={`${paragraphStyle} mt-[8.55vw] relative`}>
                    Examples of behavior that contributes to a positive environment for our
                    community include:
                    <br/>
                    <br/>
                    <ul>
                        <li>Demonstrating empathy and kindness toward other people</li>
                        <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                        <li>Giving and gracefully accepting constructive feedback</li>
                        <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</li>
                        <li>Focusing on what is best not just for us as individuals, but for the overall community.</li>
                    </ul>
                    <br/>
                    Examples of unacceptable behavior include:<br/>
                    <br/>
                    <ul>
                        <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
                        <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
                        <li>Public or private harassment</li>
                        <li>Publishing others&apos; private information, such as a physical or email address, without their explicit permission</li>
                        <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                    </ul>
                </div>
                <h3 className='mt-[8.55vw]'>
                    Enforcement Responsibilities
                </h3>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>
                    Community leaders are responsible for clarifying and enforcing our standards of
                    acceptable behavior and will take appropriate and fair corrective action in
                    response to any behavior that they deem inappropriate, threatening, offensive,
                    or harmful.
                    <br/>
                    <br/>
                    Community leaders have the right and responsibility to remove, edit, or reject
                    comments, commits, code, wiki edits, issues, and other contributions that are
                    not aligned to this Code of Conduct, and will communicate reasons for moderation
                    decisions when appropriate.
                </p>
                <h3 className='mt-[8.55vw]'>
                    Scope
                </h3>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>
                    This Code of Conduct applies within all digital and in person community spaces and events, 
                    and also applies when an individual is officially representing the community in public spaces.
                    Examples of representing our community include using an official email address,
                    posting via an official social media account, or acting as a
                    representative at an online or offline event.
                </p>
                <h3 className='mt-[8.55vw]'>
                    Enforcement
                </h3>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>
                    Instances of abusive, harassing, or otherwise unacceptable behavior may be
                    reported to the community leaders responsible for enforcement at
                    the general contact form at www.aifoundry.org, or via email to tamao@aifoundry.org.
                    <br/>
                    <br/>
                    All complaints will be reviewed and investigated promptly and fairly.
                    <br/>
                    <br/>
                    All community leaders are obligated to respect the privacy and security of the
                    reporter of any incident.
                </p>
                <h3 className='mt-[8.55vw]'>
                    Enforcement Guidelines
                </h3>
                <div className={`${paragraphStyle} mt-[1.115vw]`}>
                    Community leaders will follow these Community Impact Guidelines in determining
                    the consequences for any action they deem in violation of this Code of Conduct:
                    <br/>
                    <br/>
                    <ol className='-ml-[0.5vw]'>
                        <li>
                            <b>Correction</b><br/>
                            <b>Community Impact:</b> Use of inappropriate language or other behavior deemed
                            unprofessional or unwelcome in the community.
                            <br/>
                            <br/>
                            <b>Consequence:</b> A private, written warning from community leaders, providing
                            clarity around the nature of the violation and an explanation of why the
                            behavior was inappropriate. A public apology may be requested.
                        </li>
                        <br/>
                        <li>
                            <b>Warning</b><br/>
                            <b>Community Impact:</b> A violation through a single incident or series of
                            actions.
                            <br/>
                            <br/>
                            <b>Consequence:</b> A warning with consequences for continued behavior. No
                            interaction with the people involved, including unsolicited interaction with
                            those enforcing the Code of Conduct, for a specified period of time. This
                            includes avoiding interactions in community spaces as well as external channels
                            like social media. Violating these terms may lead to a temporary or permanent
                            ban.
                        </li>
                        <br/>
                        <li>
                            <b>Temporary Ban</b><br/>
                            <b>Community Impact:</b> A serious violation of community standards, including
                            sustained inappropriate behavior.
                            <br/>
                            <br/>
                            <b>Consequence:</b> A temporary ban from any sort of interaction or public
                            communication with the community for a specified period of time. No public or
                            private interaction with the people involved, including unsolicited interaction
                            with those enforcing the Code of Conduct, is allowed during this period.
                            Violating these terms may lead to a permanent ban.
                        </li>
                        <br/>
                        <li>
                            <b>Permanent Ban</b><br/>
                            <b>Community Impact:</b> Demonstrating a pattern of violation of community
                            standards, including sustained inappropriate behavior, harassment of an
                            individual, or aggression toward or disparagement of classes of individuals.
                            <br/>
                            <br/>
                            <b>Consequence:</b> A permanent ban from any sort of public interaction within the
                            community.
                        </li>
                    </ol>
                </div>
                <h3 className='mt-[8.55vw]'>
                    Attribution
                </h3>
                <p className={`${paragraphStyle} mt-[4.27vw]`}>
                    This Code of Conduct is adapted from the <a className='font-bold' href='https://www.contributor-covenant.org'>Contributor Covenant</a> homepage,
                    version 2.1, available at <a className='font-bold' href='https://www.contributor-covenant.org/version/2/1/code_of_conduct.html'>https://www.contributor-covenant.org/version/2/1/code_of_conduct.html</a>.
                    <br/><br/>
                    Community Impact Guidelines were inspired by <a className='font-bold' href='https://github.com/mozilla/diversity'>Mozilla&apos;s code of conduct enforcement ladder</a>.
                    <br/><br/>
                    For answers to common questions about this code of conduct, see the <a className='font-bold' href='https://www.contributor-covenant.org/faq'>FAQ</a>. Translations are available at <a className='font-bold' href='https://www.contributor-covenant.org/translations'>https://www.contributor-covenant.org/translations</a>.
                </p>   
                <div className={`${paragraphStyle} mt-[8.55vw] relative`}>
                    <div id='privacy-policy-mobile' className='absolute left-0 -top-[30vw]' />
                    <iframe className='w-full h-[12780px] border-2 p-[16px] border-black rounded-[1.115vw]' src='https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=2fd31d37-c2f6-4c3e-9769-c3667f76cb3d' />
                </div>   
                <div className={`${paragraphStyle} mt-[8.55vw] relative`}>
                    <div id='terms-of-use-mobile' className='absolute left-0 -top-[30vw]' />
                    <iframe className='w-full h-[12300px] border-2 p-[16px] border-black rounded-[1.115vw]' src='https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=34285775-1595-400b-b451-a7f993129f0d' />
                </div>   
                <div className={`${paragraphStyle} mt-[8.55vw] mb-[10vw] relative`}>
                    <div id='cookie-policy-mobile' className='absolute left-0 -top-[30vw]' />
                    <iframe className='w-full h-[2500px] border-2 p-[16px] border-black rounded-[1.115vw]' src='https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=7cb45296-38b6-4722-97b1-df160a8f5fd3' />
                </div> 
            </div>
        </div>
    )
}