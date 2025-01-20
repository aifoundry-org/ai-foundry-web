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

    const onSubmit = (data: any) => {
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

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className='flex flex-col w-[46.95vw] px-[5.28vw] pt-[2vw] pb-[3vw] justify-between border-black border-2 bg-sand relative'>
                <button className='absolute top-[2vw] right-[2vw]' type='button' onClick={() => setIsModalOpen(false)} aria-label='Close modal'>
                    <img src={IMGCloseButton.src} className='w-[2.225vw] h-[2.225vw]' />
                </button>
                {!showResult && <>
                    <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col items-center ${isSending ? 'bg-transparent opacity-50 pointer-events-none' : ''}`}>
                        <div className='flex flex-col gap-[1.67vw] py-[3.34vw] items-center justify-center w-full'>
                            <p className='text-[3.34vw] font-black uppercase'>Contact us</p>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="First Name"
                                    variant="outlined"
                                    placeholder='First Name'
                                    className={`${inputStyles} ${errors.firstName ? 'border-red-600' : ''}`}
                                    {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })}
                                />
                                {errors.firstName?.type === 'required' &&  <div className='text-[1.6vw] text-red-500 uppercase'>First Name is required</div>}
                                {errors.firstName?.type === 'pattern' &&  <div className='text-[1.6vw] text-red-500 uppercase'>First Name format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Last Name"
                                    variant="outlined"
                                    placeholder='Last Name'
                                    className={`${inputStyles} ${errors.lastName ? 'border-red-600' : ''}`}
                                    {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
                                />
                                {errors.lastName?.type === 'required' &&  <div className='text-[1.6vw] text-red-500 uppercase'>Last Name is required</div>}
                                {errors.lastName?.type === 'pattern' &&  <div className='text-[1.6vw] text-red-500 uppercase'>Last Name format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Company Name"
                                    variant="outlined"
                                    placeholder='Company Name'
                                    className={`${inputStyles} ${errors.companyName ? 'border-red-600' : ''}`}
                                    {...register("companyName", { required: true, pattern: /^[A-Za-z]+$/i })}
                                />
                                {errors.companyName?.type === 'required' &&  <div className='text-[1.6vw] text-red-500 uppercase'>Company Name is required</div>}
                                {errors.companyName?.type === 'pattern' &&  <div className='text-[1.6vw] text-red-500 uppercase'>Company Name format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Email"
                                    variant="outlined"
                                    placeholder='Email'
                                    className={`${inputStyles} ${errors.email ? 'border-red-600' : ''}`}
                                    {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                                />
                                {errors.email?.type === 'required' &&  <div className='text-[1.6vw] text-red-500 uppercase'>Email is required</div>}
                                {errors.email?.type === 'pattern' &&  <div className='text-[1.6vw] text-red-500 uppercase'>Email format invalid</div>}
                            </div>
                            <div className='flex flex-col w-full'>
                                <Input 
                                    label="Message"
                                    variant="outlined"
                                    placeholder='Message'
                                    className={`${inputStyles} ${errors.message ? 'border-red-600' : ''}`}
                                    {...register("message", { required: true })}
                                />
                                {errors.message?.type === 'required' &&  <div className='text-[1.6vw] text-red-500 uppercase'>message is required</div>}
                            </div>
                        </div>
                        <Button className='flex mb-[2vw]' content='Send' onClick={() => {
                            inputRef.current?.click();
                        }} />
                        <input ref={inputRef} id='submit-contact-us' type='submit' className='hidden'/>
                    </form>
                </>}
                {showResult && <>
                    <div className='flex flex-col gap-[1.67vw] pt-[3.34vw] pb-[1.6vw] items-center justify-center w-full'>
                        <p className='text-[3.34vw] font-black uppercase'>Thanks!</p>
                        <p className='text-[1.67vw] font-host-grotesk text-center font-normal leading-[1.81vw]'>The form was<br/>successfully submitted.</p>
                        <Button content='Ok' onClick={() => setIsModalOpen(false)} />
                    </div>
                </>}
            </div>
        </Modal>
    )
}