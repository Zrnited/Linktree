import React from 'react'
import zurilogo from '../assets/zurilogo.png';
import zurisecondlogo from '../assets/secondloogo.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Contact = () => {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        isAgreed: false
    })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange =(event)=>{
        const { name, type, value, checked } = event.target
        setForm((prevState)=>{
            return {
                ...prevState,
                [name]: type === 'checkbox' ? checked : value 
            }
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        //taking the outcome of the function validate (taking in the form values as a parameter) and setting it to formErrors
        setFormErrors(validate(form));
        setIsSubmit(true);
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit === true){
            setForm((prevState)=>{
                return {
                    ...prevState,
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    isAgreed: false

                }
            })
            toast.success('form submitted');
        }
    }, [formErrors])

    const validate =(values)=>{
        const errors = {};
        const regex = /^[^\$@]+@[^@]+\.[^@]{2,}$/i;

        if(!values.firstName){
            errors.firstName = 'first name is required';
        }

        if(!values.lastName){
            errors.lastName = 'last name is required';
        }

        if(!values.email){
            errors.email = 'email is required';
        } else if(!regex.test(values.email)){
            errors.email = 'This is not a valid email format'
        }

        if(!values.message){
            errors.message = 'message is required';
        } else if (values.message.length < 5 ){
            errors.message = 'message too short'
        }

        if(values.isAgreed === false){
            errors.isAgreed = `Please check the box`;
        }

        return errors
    }

  return (
    <div className='w-full h-full flex flex-col justify-center mb-5'>
        <ToastContainer />
        <div className='w-90 flex flex-col place-self-center mt-12 md:max-w-750'>
            <h1 className='text-3xl tracking-wide mb-3 font-bold'>Contact Me</h1>
            <p className='text-gray-500 mb-8'>Hi there, contact me to ask me about anything you have in mind</p>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5 mb-5'>
                <div className='flex flex-col gap-5 md:flex-row'>
                    <div className='flex flex-col md:w-full'>
                        <label className='mb-1'>First name</label>
                        <input 
                            type={'text'}
                            id='first_name'
                            className={formErrors?.firstName ? 'border-1 border-red300 h-44 rounded-lg px-3 focus:outline-none' : 'border-1 border-gray300 h-44 rounded-lg px-3 focus:outline-lightblue focus:border-2 focus:border-lightblue' }
                            placeholder='Enter your first name'
                            value={form.firstName}
                            name='firstName'
                            onChange={handleChange}
                        />
                        <p className='text-red-500 italic'>{formErrors?.firstName}</p>
                    </div>
                    <div className='flex flex-col md:w-full'>
                        <label className='mb-1'>Last name</label>
                        <input 
                            type={'text'}
                            id='last_name'
                            className={formErrors.lastName ? 'border-1 border-red300 h-44 rounded-lg px-3 focus:outline-none ' : 'border-1 border-gray300 h-44 rounded-lg px-3 focus:outline-lightblue focus:border-lightblue'}
                            placeholder='Enter your last name'
                            value={form.lastName}
                            name={'lastName'}
                            onChange={handleChange}
                        />
                        <p className='text-red-500 italic'>{formErrors.lastName}</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-1'>Email</label>
                    <input 
                        type={'text'}
                        id='email'
                        className={ formErrors.email ? 'border-1 border-red300 h-44 rounded-lg px-3 focus:outline-none' : 'border-1 border-gray300 h-44 rounded-lg px-3 focus:outline-lightblue'}
                        placeholder='yourname@email.com'
                        value={form.email}
                        name={'email'}
                        onChange={handleChange}
                    />
                    <p className='text-red-500 italic'>{formErrors.email}</p>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-1'>Message</label>
                    <textarea 
                        type={'textbox'}
                        id='message'
                        className={ formErrors.message ? 'border-1 border-red300 h-132 rounded-lg px-3 py-2 focus:outline-none shadowred' : 'border-1 border-gray300 h-132 rounded-lg px-3 py-2 focus:outline-none shadowbox focus:border-lightblue'}
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        value={form.message}
                        name='message'
                        onChange={handleChange}
                    />
                    <p className='text-red-500 italic'>{formErrors.message}</p>
                </div>
                <div className='flex flex-row gap-2 place-self-center'>
                    <input 
                        type={'checkbox'}
                        checked={form.isAgreed}
                        onChange={handleChange}
                        name='isAgreed'
                        className='checkbox'
                    />
                    <label className='text-sm'>You agree to providing your data to Kolawole Mayowa who may contact you.<strong className='text-red-500'> { formErrors.isAgreed}</strong></label>
                </div>

                <button 
                    id='btn__submit'
                    className='w-full rounded-lg bg-blue-600 h-44 text-white text-lg cursor-pointer hover:bg-blue-700 transition ease-in-out delay-100 focus:outline-none'
                >
                    Send message
                </button>
            </form>
        </div>

        <footer className='flex w-full mt-12'>
            <div className='w-full h-auto z-10 flex flex-col items-center p-5'>
                <div className='w-full flex flex-col justify-center items-center gap-2'>
                    <div className='w-full h-2 bg-gray-300 mt-4'></div>
                    <div className='flex flex-col w-90 items-start gap-2 md:flex-row md:items-center md:justify-between'>
                        <div className=''>
                        <a href='https://zuri.com' target={'_blank'} rel='noreferrer'>
                            <img 
                            src={zurilogo}
                            alt='zuri-logo'
                            className='w-4/5 sm:w-full'
                            />
                        </a>
                        </div>

                        <p className='text-base'>HNG Internship 9 Frontend Task</p>
                        
                        <div className=''>
                        <a href='https://zuri.com' target={'_blank'} rel='noreferrer'>
                            <img 
                            src={zurisecondlogo}
                            alt='zuri-logo'
                            className='w-4/5 sm:w-full'
                            />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
    </div>
  )
}

export default Contact