"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'http://localhost:3002/', //Should be changed in deployment progress
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000
});

const makeEmailData = (email: any, name: any, message: any) => {
  const subject = 'Email from ' + name + ' to Matrix Eagle';
  const html = "<b>Email Address</b>: <a href='mailto:" + email + "'>" + email + "</a><br><br>" + 
               "<b>Message</b>:<br>" + message;
  return {subject: subject, html: html};
};

const sendEmail = async (emailData: any) => {
  try {
    await axiosPublic.post('/send-email', emailData);
  }
  catch (error: any) {
    console.log(error)
    throw new Error(error.message);
  }
};

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [_errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  useEffect(() => {
    const _errors: FormErrors = {};
    if (!formData.name) {
      _errors.name = 'Name is required';
    }
    if (!formData.email || !formData.email.includes('@')) {
      _errors.email = 'Invalid email';
    }
    if (!formData.message) {
      _errors.message = 'Message is required';
    }
    setErrors(_errors);
    setIsValid(Object.keys(_errors).length === 0);
  }, [formData.name, formData.email, formData.message]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      try {
        await sendEmail(makeEmailData(formData.email, formData.name, formData.message));
        toast.info('Message has been sent successfully');
        setFormData({name:'', email:'', message:''});
      } catch (error: any) {
        toast.error('Sending message has been failed');
      }
    } else {
      toast.error('Please fill out the form correctly');
    }
  };

  return (
    <div className="bg-transparent flex items-center justify-center px-4 sm:px-6 md:px-10 py-8 sm:py-12 2xl:pt-[140px] 3xl:pt-[187px] 3xl:pb-[140px]">
      <div className="w-[90%] max-w-[95vw] sm:max-w-3xl 2xl:max-w-[60%] 3xl:max-w-[50%]">
        <h1 className="text-[#FFEB31] font-bold text-center mb-8 sm:mb-14 md:mb-16 text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[40px] 2xl:text-[64px] 3xl:text-[94px] leading-tight">
          {t("contact.title")}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6 md:space-y-8 2xl:space-y-[46px]"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact.namePlaceholder")}
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-12 sm:h-14 md:h-16 2xl:h-auto px-5 sm:px-6 md:px-8 2xl:py-9 text-white placeholder-white text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-[30px] 3xl:text-[50px] font-semibold bg-gradient-to-r from-[#737373]/30 to-[#000000]/70 border-2 2xl:border-2 3xl:border-4 border-[#00D962] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00D962] transition"
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact.emailPlaceholder")}
            value={formData.email}
            onChange={handleInputChange}
            className="w-full h-12 sm:h-14 md:h-16 2xl:h-auto px-5 sm:px-6 md:px-8 2xl:py-12 text-white placeholder-white text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-[30px] 3xl:text-[50px] font-semibold bg-gradient-to-r from-[#737373]/30 to-[#000000]/70 border-2 2xl:border-2 3xl:border-4 border-[#00D962] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00D962] transition"
          />

          <textarea
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            value={formData.message}
            onChange={handleInputChange}
            rows={8}
            className="w-full px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 text-white placeholder-white text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-[30px] 3xl:text-[50px] font-semibold bg-gradient-to-r from-[#737373]/30 to-[#000000]/70 border-2 2xl:border-2 3xl:border-4 border-[#00D962] rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-[#00D962] transition"
          />

          <div className="flex justify-center pt-4 sm:pt-6 2xl:mt-[48px]">
            <button
              type="submit"
              className="cursor-pointer hover:scale-101 px-6 sm:px-12 md:px-16 py-3 sm:py-5 text-black font-bold text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-[40px] 3xl:text-[59px] bg-[#00D962] border-[#00D962] hover:bg-[#00D962] rounded-3xl transition-colors duration-200 shadow-md focus:outline-none focus:ring-4 focus:ring-[#38b6ff]/50"
            >
              {t("contact.submit")}
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}
