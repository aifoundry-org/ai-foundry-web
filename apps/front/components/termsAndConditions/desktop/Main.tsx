import Link from 'next/link'
import IMGBackground from '@/public/imgs/termsAndConditions/background.webp'
import ImageWrapper from '@/components/common/universal/ImageWrapper'

const paragraphStyle = 'font-host-grotesk font-normal text-[1.115vw] leading-[1.67vw]'

export default function Main() {
    return (
        <div className='hidden md:flex md:flex-col md:w-full md:h-full md:font-dharma-gothic-e'>
            <div className='flex flex-col w-full h-fit mx-auto my-[6vw]'>
                <div className='flex w-full text-center justify-center relative'>
                    <div className='absolute top-[0.2vw] left-[27vw] w-[48vw] z-0'>
                        <ImageWrapper src={IMGBackground.src} alt='Background' />
                    </div>
                    <div className='flex text-[4.45vw] font-black leading-[3.69vw] mt-[3vw] mb-[2.225vw] uppercase z-[1]'>
                        Applicable Terms & Conditions
                    </div> 
                </div>
                <div className='flex flex-row w-full h-full justify-center gap-[2.225vw]'>
                    <Link href='#coc' className='text-[1.395vw] leading-[1.395vw] font-bold uppercase'>Community Code of Conduct</Link>
                    <Link href='#privacy-policy' className='text-[1.395vw] leading-[1.395vw] font-bold uppercase'>Privacy Policy</Link>
                    <Link href='#terms-of-use' className='text-[1.395vw] leading-[1.395vw] font-bold uppercase'>Terms of Use</Link>
                    <Link href='#cookie-policy' className='text-[1.395vw] leading-[1.395vw] font-bold uppercase'>Cookie Policy</Link>
                </div>
            </div>
            <div className='flex flex-col w-[55.7vw] mx-auto my-[4.825vw]'>
                <h2 className='relative'>
                    <div id='coc' className='absolute left-0 -top-[10vw]' />
                    Community Code of Conduct
                </h2>
                <p className={`${paragraphStyle} mt-[1.115vw]`}>Contributor Covenant 3.0, adopted January 30, 2026</p>
                <h3 className='mt-[3.34vw]'>Our Pledge</h3>
                <p className={`${paragraphStyle} mt-[1.115vw]`}>
                    We pledge to make our community welcoming, safe, and equitable for all.
                    <br/><br/>
                    We are committed to fostering an environment that respects and promotes the 
                    dignity, rights, and contributions of all individuals, regardless of characteristics 
                    including race, ethnicity, caste, color, age, physical characteristics, neurodiversity, 
                    disability, sex or gender, gender identity or expression, sexual orientation, language, 
                    philosophy or religion, national or social origin, socio-economic position, level of 
                    education, or other status.
                    <br/><br/>
                    The same privileges of participation are extended to everyone who participates in good 
                    faith and in accordance with this Covenant.
                </p>

                <h3 className='mt-[3.34vw] relative'>Encouraged Behaviors</h3>
                <div className={`${paragraphStyle} mt-[1.115vw]`}>
                    While acknowledging differences in social norms, we all strive to meet our community&apos;s 
                    expectations for positive behavior. We also understand that our words and actions may be 
                    interpreted differently than we intend based on culture, background, or native language.
                    <br/><br/>
                    With these considerations in mind, we agree to behave mindfully toward each other and 
                    act in ways that center our shared values, including:
                    <br/><br/>
                    <ul className='list-disc pl-[2vw]'>
                        <li>Respecting the purpose of our community, our activities, and our ways of gathering.</li>
                        <li>Engaging kindly and honestly with others.</li>
                        <li>Respecting different viewpoints and experiences.</li>
                        <li>Taking responsibility for our actions and contributions.</li>
                        <li>Gracefully giving and accepting constructive feedback.</li>
                        <li>Committing to repairing harm when it occurs.</li>
                        <li>Behaving in other ways that promote and sustain the well-being of our community.</li>
                    </ul>
                </div>

                <h3 className='mt-[3.34vw] relative'>Restricted Behaviors</h3>
                <div className={`${paragraphStyle} mt-[1.115vw]`}>
                    We agree to restrict the following behaviors in our community. Instances, threats, and 
                    promotion of these behaviors are violations of this Code of Conduct.
                    <br/><br/>
                    <ul className='list-disc pl-[2vw] gap-y-[0.5vw] flex flex-col'>
                        <li><b>Harassment.</b> Violating explicitly expressed boundaries or engaging in unnecessary personal attention after any clear request to stop.</li>
                        <li><b>Character attacks.</b> Making insulting, demeaning, or pejorative comments directed at a community member or group of people.</li>
                        <li><b>Stereotyping or discrimination.</b> Characterizing anyone&apos;s personality or behavior on the basis of immutable identities or traits.</li>
                        <li><b>Sexualization.</b> Behaving in a way that would generally be considered inappropriately intimate in the context or purpose of the community.</li>
                        <li><b>Violating confidentiality.</b> Sharing or acting on someone&apos;s personal or private information without their permission.</li>
                        <li><b>Endangerment.</b> Causing, encouraging, or threatening violence or other harm toward any person or group.</li>
                    </ul>
                    <br/>
                    Behaving in other ways that threaten the well-being of our community is also prohibited.
                </div>

                <h3 className='mt-[3.34vw] relative'>Other Restrictions</h3>
                <div className={`${paragraphStyle} mt-[1.115vw]`}>
                    <ul className='list-disc pl-[2vw] gap-y-[0.5vw] flex flex-col'>
                        <li><b>Misleading identity.</b> Impersonating someone else for any reason, or pretending to be someone else to evade enforcement actions.</li>
                        <li><b>Failing to credit sources.</b> Not properly crediting the sources of content you contribute.</li>
                        <li><b>Promotional materials.</b> Sharing marketing or other commercial content in a way that is outside the norms of the community.</li>
                        <li><b>Irresponsible communication.</b> Failing to responsibly present content which includes, links or describes any other restricted behaviors.</li>
                    </ul>
                </div>

                <h3 className='mt-[3.34vw] relative'>Reporting an Issue</h3>
                <p className={`${paragraphStyle} mt-[1.115vw]`}>
                    Tensions can occur between community members even when they are trying their best to collaborate. 
                    Not every conflict represents a code of conduct violation, and this Code of Conduct reinforces 
                    encouraged behaviors and norms that can help avoid conflicts and minimize harm.
                    <br/><br/>
                    When an incident does occur, it is important to report it promptly. To report a possible violation, 
                    please use the general contact form at www.aifoundry.org, or email tamao@aifoundry.org.
                    <br/><br/>
                    Community Moderators take reports of violations seriously and will make every effort to respond 
                    in a timely manner. They will investigate all reports of code of conduct violations, reviewing 
                    messages, logs, and recordings, or interviewing witnesses and other participants.
                    <br/><br/>
                    Community Moderators will keep investigation and enforcement actions as transparent as possible 
                    while prioritizing safety and confidentiality. In order to honor these values, enforcement 
                    actions are carried out in private with the involved parties, but communicating to the whole 
                    community may be part of a mutually agreed upon resolution.
                </p>

                <h3 className='mt-[3.34vw] relative'>Addressing and Repairing Harm</h3>
                <div className={`${paragraphStyle} mt-[1.115vw]`}>
                    If an investigation by the Community Moderators finds that this Code of Conduct has been violated, 
                    the following enforcement ladder may be used to determine how best to repair harm, based on the 
                    incident&apos;s impact on the individuals involved and the community as a whole.
                    <br/><br/>
                    <ol className='-ml-[0.5vw]'>
                        <li>
                            <b>Warning</b><br/>
                            <b>Event:</b> A violation involving a single incident or series of incidents.
                            <br/>
                            <b>Consequence:</b> A private, written warning from the Community Moderators.
                            <br/>
                            <b>Repair:</b> Examples of repair include a private written apology, acknowledgement of responsibility, and seeking clarification on expectations.
                        </li>
                        <br/>
                        <li>
                            <b>Temporarily Limited Activities</b><br/>
                            <b>Event:</b> A repeated incidence of a violation that previously resulted in a warning, or the first incidence of a more serious violation.
                            <br/>
                            <b>Consequence:</b> A private, written warning with a time-limited cooldown period. The cooldown period may be limited to particular communication channels or interactions with particular community members.
                            <br/>
                            <b>Repair:</b> Examples of repair may include making an apology, using the cooldown period to reflect on actions and impact, and being thoughtful about re-entering community spaces after the period is over.
                        </li>
                        <br/>
                        <li>
                            <b>Temporary Suspension</b><br/>
                            <b>Event:</b> A pattern of repeated violation which the Community Moderators have tried to address with warnings, or a single serious violation.
                            <br/>
                            <b>Consequence:</b> A private written warning with conditions for return from suspension.
                            <br/>
                            <b>Repair:</b> Examples of repair include respecting the spirit of the suspension, meeting the specified conditions for return, and being thoughtful about how to reintegrate with the community when the suspension is lifted.
                        </li>
                        <br/>
                        <li>
                            <b>Permanent Ban</b><br/>
                            <b>Event:</b> A pattern of repeated code of conduct violations that other steps on the ladder have failed to resolve, or a violation so serious that the Community Moderators determine there is no way to keep the community safe with this person as a member.
                            <br/>
                            <b>Consequence:</b> Access to all community spaces, tools, and communication channels is removed.
                            <br/>
                            <b>Repair:</b> There is no possible repair in cases of this severity.
                        </li>
                    </ol>
                    <br/>
                    This enforcement ladder is intended as a guideline. It does not limit the ability of Community Moderators to use their discretion and judgment, in keeping with the best interests of our community.
                </div>

                <h3 className='mt-[3.34vw] relative'>
                    Scope
                </h3>
                <p className={`${paragraphStyle} mt-[1.115vw]`}>
                    This Code of Conduct applies within all community spaces, and also applies when an 
                    individual is officially representing the community in public or other spaces. 
                    Examples of representing our community include using an official email address, 
                    posting via an official social media account, or acting as an appointed 
                    representative at an online or offline event.
                </p>

                <h3 className='mt-[3.34vw] relative'>
                    Attribution
                </h3>
                <p className={`${paragraphStyle} mt-[1.115vw]`}>
                    This Code of Conduct is adapted from the <a className='font-bold' href='https://www.contributor-covenant.org'>Contributor Covenant</a> homepage,
                    version 3.0, available at <a className='font-bold' href='https://www.contributor-covenant.org/version/3/0/code_of_conduct/'>https://www.contributor-covenant.org/version/3/0/code_of_conduct/</a>.
                    <br/><br/>
                    Contributor Covenant is stewarded by the <a className='font-bold' href='https://ethicalsource.dev/'>Organization for Ethical Source</a> and licensed under <a className='font-bold' href='https://creativecommons.org/licenses/by-sa/4.0/'>CC BY-SA 4.0</a>.
                    <br/><br/>
                    For answers to common questions about this code of conduct, see the <a className='font-bold' href='https://www.contributor-covenant.org/faq'>FAQ</a>. Translations are available at <a className='font-bold' href='https://www.contributor-covenant.org/translations'>https://www.contributor-covenant.org/translations</a>.
                </p>
                <div className={`${paragraphStyle} mt-[3.34vw] relative`}>
                    <div id='privacy-policy' className='absolute left-0 -top-[10vw]' />
                    <iframe className='w-full h-[1166.67vw] border-2 p-[16px] border-black rounded-[1.115vw]' src='https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=2fd31d37-c2f6-4c3e-9769-c3667f76cb3d' />
                </div>  
                <div className={`${paragraphStyle} mt-[3.34vw] relative`}>
                    <div id='terms-of-use' className='absolute left-0 -top-[10vw]' />
                    <iframe className='w-full h-[962vw] border-2 p-[1vw] border-black rounded-[1.115vw] overflow-hidden' src='https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=34285775-1595-400b-b451-a7f993129f0d' />
                </div> 
                <div className={`${paragraphStyle} mt-[3.34vw] relative`}>
                    <div id='cookie-policy' className='absolute left-0 -top-[10vw]' />
                    <iframe className='w-full h-[542vw] border-2 p-[1vw] border-black rounded-[1.115vw] overflow-hidden' src='https://app.termly.io/policy-viewer/iframe-content.html?policyUUID=7cb45296-38b6-4722-97b1-df160a8f5fd3' />
                </div>           
            </div>
        </div>
    )
}