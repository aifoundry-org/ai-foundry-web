import { Dispatch, SetStateAction, useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import Modal from '@/libs/litebox-lib/ui/Modal/Modal'
import Input from '@/libs/litebox-lib/ui/Input/Input';
import IMGCloseButton from '@/public/pngs/sideMenu/closeButton.png'
import Button from '@/libs/litebox-lib/ui/Button/Button'

export default function FaqsModal({isModalOpen, setIsModalOpen} : {isModalOpen:boolean, setIsModalOpen: Dispatch<SetStateAction<boolean>>}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { register, formState: {errors}, handleSubmit } = useForm({
        mode: "onBlur"
    });
    const [isSending, setIsSending] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const onSubmit = () => {
        if(Object.keys(errors).length == 0){
            setIsSending(true);
            const timeout = setTimeout(() => {
                setIsSending(false);
                setShowResult(true);
                clearTimeout(timeout);
            }, 1000);
        }
    }

    const inputStyle = 'w-full h-[14.15vw] font-host-grotesk text-[3.75vw] border-2 border-black focus:border-orange'
    const errorStyle = 'text-[3.2vw] text-red-500 font-host-grotesk mt-[2.15vw]'

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className='flex flex-col w-[88.3vw] px-[6.4vw] justify-between border-black border-2 bg-sand relative'>
                <button className='absolute top-[5vw] right-[5vw]' type='button' onClick={() => setIsModalOpen(false)} aria-label='Close modal'>
                    <img src={IMGCloseButton.src} className='w-[8.55vw] h-[8.55vw]' />
                </button>
                {!showResult && <>
                    <form onSubmit={handleSubmit(onSubmit)} className={`faqsModal flex flex-col items-center ${isSending ? 'bg-transparent opacity-50 pointer-events-none' : ''}`}>
                        <div className='flex flex-col gap-[6.675vw] py-[3.34vw] items-center justify-center w-full'>
                            <p className='text-[8.8vw] font-black uppercase'>Contact us</p>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="First Name"
                                    variant="outlined"
                                    placeholder='First Name'
                                    className={`${inputStyle} ${errors.firstName ? 'border-red-600' : ''}`}
                                    {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })}
                                />
                                {errors.firstName?.type === 'required' &&  <div className={errorStyle}>First Name is required</div>}
                                {errors.firstName?.type === 'pattern' &&  <div className={errorStyle}>First Name format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Last Name"
                                    variant="outlined"
                                    placeholder='Last Name'
                                    className={`${inputStyle} ${errors.lastName ? 'border-red-600' : ''}`}
                                    {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
                                />
                                {errors.lastName?.type === 'required' &&  <div className={errorStyle}>Last Name is required</div>}
                                {errors.lastName?.type === 'pattern' &&  <div className={errorStyle}>Last Name format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Company Name"
                                    variant="outlined"
                                    placeholder='Company Name'
                                    className={`${inputStyle} ${errors.companyName ? 'border-red-600' : ''}`}
                                    {...register("companyName", { required: true, pattern: /^[A-Za-z]+$/i })}
                                />
                                {errors.companyName?.type === 'required' &&  <div className={errorStyle}>Company Name is required</div>}
                                {errors.companyName?.type === 'pattern' &&  <div className={errorStyle}>Company Name format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Email"
                                    variant="outlined"
                                    placeholder='Email'
                                    className={`${inputStyle} ${errors.email ? 'border-red-600' : ''}`}
                                    {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                                />
                                {errors.email?.type === 'required' &&  <div className={errorStyle}>Email is required</div>}
                                {errors.email?.type === 'pattern' &&  <div className={errorStyle}>Email format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Message"
                                    variant="outlined"
                                    placeholder='Message'
                                    className={`${inputStyle} ${errors.message ? 'border-red-600' : ''}`}
                                    {...register("message", { required: true })}
                                />
                                {errors.message?.type === 'required' &&  <div className={errorStyle}>message is required</div>}
                            </div>
                        </div>
                        <Button className='my-[7vw]' content='Send' onClick={() => {
                            inputRef.current?.click();
                        }} />
                        <input ref={inputRef} id='submit-contact-us' type='submit' className='hidden'/>
                    </form>
                </>}
                {showResult && <>
                    <div className='flex flex-col gap-[1.67vw] pt-[10vw] pb-[1.6vw] items-center justify-center w-full'>
                        <p className='text-[10.675vw] font-black uppercase'>Thanks!</p>
                        <p className='text-[4.8vw] font-host-grotesk text-center font-normal leading-[7.2vw]'>The form was<br/>successfully submitted.</p>
                        <Button className='my-[7vw]' content='Ok' onClick={() => setIsModalOpen(false)} />
                    </div>
                </>}
            </div>
        </Modal>
    )
}