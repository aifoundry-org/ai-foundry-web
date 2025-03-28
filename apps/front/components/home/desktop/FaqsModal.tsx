import { Dispatch, SetStateAction, useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import Modal from '@/libs/litebox-lib/ui/Modal/Modal'
import Input from '@/libs/litebox-lib/ui/Input/Input';
import IMGCloseButton from '@/public/imgs/sideMenu/closeButton.webp'
import Button from '@/libs/litebox-lib/ui/Button/Button'
import ImageWrapper from '@/components/common/universal/ImageWrapper';

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

    const inputStyles = 'w-full h-[4.45vw] font-host-grotesk text-[1.125vw] border-2 border-black focus:border-orange'
    const errorStyle = 'text-[0.84vw] text-red-500 font-host-grotesk mt-[0.56vw]'

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className={`flex flex-col ${!showResult ? 'w-[47vw] h-[50.56vw]' : 'w-[40.7vw] h-[24.45vw]'} px-[4.45vw] pb-[1vw] justify-center border-black border-2 bg-sand relative`}>
                <button className='absolute top-[2vw] right-[2vw]' type='button' onClick={() => setIsModalOpen(false)} aria-label='Close modal'>
                    <div className='w-[2.225vw] h-[2.225vw]'>
                        <ImageWrapper src={IMGCloseButton.src} alt='Close button' />
                    </div>
                </button>
                {!showResult && <>
                    <form onSubmit={handleSubmit(onSubmit)} className={`faqsModal relative flex flex-col items-center ${isSending ? 'bg-transparent opacity-50 pointer-events-none' : ''}`}>
                        <div className={`flex flex-col gap-[1.67vw] ${errors.message ? 'pt-[2vw]' : 'py-[3.34vw]'} items-center justify-center w-full`}>
                            <p className='text-[3.34vw] font-black uppercase'>Contact us</p>
                            <div className='flex flex-col w-full relative'>
                                <Input 
                                    label="First Name"
                                    variant="outlined"
                                    placeholder='First Name'
                                    className={`${inputStyles} ${errors.firstName ? 'border-red-600' : ''}`}
                                    {...register("firstName", { required: true, pattern: /^[\p{L}\s]+$/u, maxLength: {
                                        value: 20,
                                        message: "Too many characters, 20 chars limit"
                                    }})}
                                />
                                {errors.firstName?.type === 'required' &&  <div className={errorStyle}>First Name is required</div>}
                                {errors.firstName?.type === 'pattern' &&  <div className={errorStyle}>First Name format invalid</div>}
                                {errors.firstName?.message && <div className={errorStyle}>{errors.firstName?.message.toString()}</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Last Name"
                                    variant="outlined"
                                    placeholder='Last Name'
                                    className={`${inputStyles} ${errors.lastName ? 'border-red-600' : ''}`}
                                    {...register("lastName", { required: true, pattern: /^[\p{L}\s]+$/u, maxLength: {
                                        value: 20,
                                        message: "Too many characters, 20 chars limit"
                                    }})}
                                />
                                {errors.lastName?.type === 'required' &&  <div className={errorStyle}>Last Name is required</div>}
                                {errors.lastName?.type === 'pattern' &&  <div className={errorStyle}>Last Name format invalid</div>}
                                {errors.lastName?.message && <div className={errorStyle}>{errors.lastName?.message.toString()}</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Company Name"
                                    variant="outlined"
                                    placeholder='Company Name'
                                    className={`${inputStyles} ${errors.companyName ? 'border-red-600' : ''}`}
                                    {...register("companyName", { required: true, pattern: /^[\p{L}\s]+$/u, maxLength: {
                                        value: 20,
                                        message: "Too many characters, 20 chars limit"
                                    }})}
                                />
                                {errors.companyName?.type === 'required' &&  <div className={errorStyle}>Company Name is required</div>}
                                {errors.companyName?.type === 'pattern' &&  <div className={errorStyle}>Company Name format invalid</div>}
                                {errors.companyName?.message && <div className={errorStyle}>{errors.companyName?.message.toString()}</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Email"
                                    variant="outlined"
                                    placeholder='Email'
                                    className={`${inputStyles} ${errors.email ? 'border-red-600' : ''}`}
                                    {...register("email", { required: true, maxLength: {
                                        value: 30,
                                        message: "Too many characters, 30 chars limit"
                                    }, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                                />
                                {errors.email?.type === 'required' &&  <div className={errorStyle}>Email is required</div>}
                                {errors.email?.type === 'pattern' &&  <div className={errorStyle}>Email format invalid</div>}
                                {errors.email?.message && <div className={errorStyle}>{errors.email?.message.toString()}</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Message"
                                    variant="outlined"
                                    placeholder='Message'
                                    className={`${inputStyles} ${errors.message ? 'border-red-600' : ''}`}
                                    {...register("message", { required: true, maxLength: {
                                        value: 200,
                                        message: "Too many characters, 200 chars limit"
                                    }})}
                                />
                                {errors.message?.type === 'required' &&  <div className={errorStyle}>Message is required</div>}
                                {errors.message?.type === 'pattern' &&  <div className={errorStyle}>Message format invalid</div>}
                                {errors.message?.message && <div className={errorStyle}>{errors.message?.message.toString()}</div>}
                            </div>
                        </div>
                        <Button className='flex mb-[2vw] !px-[1.61vw]' content='Send' onClick={() => {
                            inputRef.current?.click();
                        }} />
                        <input ref={inputRef} id='submit-contact-us' type='submit' className='hidden'/>
                    </form>
                </>}
                {showResult && <>
                    <div className='flex flex-col gap-[2.25vw] items-center justify-center w-full'>
                        <p className='text-[3.34vw] font-black uppercase'>Thanks!</p>
                        <p className='text-[1.67vw] font-host-grotesk text-center font-normal leading-[1.81vw]'>The form was<br/>successfully submitted.</p>
                        <Button className='!px-[1.57vw]' content='Ok' onClick={() => setIsModalOpen(false)} />
                    </div>
                </>}
            </div>
        </Modal>
    )
}