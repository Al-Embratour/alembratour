'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
    const { language } = useLanguage();
    const isAr = language === 'ar';

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    // حقول الفورم المبسطة
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: 'custom', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // حالة إظهار خيارات الاتصال الثلاثة
    const [showPhoneOptions, setShowPhoneOptions] = useState(false);
    const phoneMenuRef = useRef<HTMLDivElement | null>(null);

    // إغلاق منيو الهاتف عند الضغط في أي مكان خارجي
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (phoneMenuRef.current && !phoneMenuRef.current.contains(event.target as Node)) {
                setShowPhoneOptions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 🌌 كود بناء وتحريك شبكة الجزيئات باللون الغامق الفخم
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas!.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas!.height) this.vy = -this.vy;

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.hypot(dx, dy);
                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= (dx / distance) * force * 0.8;
                        this.y -= (dy / distance) * force * 0.8;
                    }
                }
            }

            draw() {
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                // تغيير لون الجزيئات لتصبح غامقة (Slate-700) بنسبة شفافية ناعمة
                ctx!.fillStyle = 'rgba(51, 65, 85, 0.25)';
                ctx!.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 120);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            const maxDistance = 115;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < maxDistance) {
                        const alpha = (1 - distance / maxDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        // خطوط غامقة متناسقة مع الثيم الجديد
                        ctx.strokeStyle = `rgba(51, 65, 85, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            drawLines();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', projectType: 'custom', message: '' });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden flex items-center justify-center py-20 px-4" dir={isAr ? 'rtl' : 'ltr'}>

            {/* 🔮 لوحة الكانفاس التفاعلية بالأشكال الغامقة */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-100"
            />

            {/* محتوى الصفحة المركزي */}
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* العمود الأول: نصوص ترحيبية وقنوات التواصل المباشرة */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-8 p-6">
                    <div>
                        {/* البوردر دهبي والكلام جواه غامق (text-slate-900) */}
                        <span className="text-xs font-bold tracking-widest text-slate-900 uppercase bg-[#C8A85A]/15 border border-[#C8A85A] px-3 py-1.5 rounded-md inline-block mb-4">
                            {isAr ? 'تواصل معنا' : 'GET IN TOUCH'}
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                            {isAr ? 'لنصنع معاً منصة تفرض هيبتها' : 'Let’s Architect Elite Platforms'}
                        </h1>
                        <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-light">
                            {isAr
                                ? 'مساحة الإمبراطور مفتوحة دائماً للمشاريع الاستثنائية والمنصات الكبرى. اترك تفاصيل فكرتك وسنتولى هندستها بأحدث المعايير العالمية.'
                                : 'Al Embratour workspace is perpetually open for high-end corporate ecosystems and enterprise applications.'}
                        </p>
                    </div>

                    {/* قنوات التواصل المباشرة */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                        
                        {/* ✉️ البريد الإلكتروني المحول والمفعل برابط مباشر */}
                        <a href="mailto:mohamedsamara0113@gmail.com" className="flex items-center gap-4 group cursor-pointer w-fit">
                            <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:border-[#C8A85A] transition-all duration-300 flex items-center justify-center text-slate-800 group-hover:text-[#A47E2B]">
                                <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[11px] text-slate-400 font-bold tracking-wider uppercase">{isAr ? 'البريد الإلكتروني' : 'EMAIL ADDRESS'}</p>
                                <p className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-[#A47E2B]">mohamedsamara0113@gmail.com</p>
                            </div>
                        </a>

                        {/* 📞 رقم الهاتف الذكي مع القائمة الثلاثية المنبثقة */}
                        <div className="relative" ref={phoneMenuRef}>
                            <div 
                                onClick={() => setShowPhoneOptions(!showPhoneOptions)}
                                className="flex items-center gap-4 group cursor-pointer w-fit"
                            >
                                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:border-[#C8A85A] transition-all duration-300 flex items-center justify-center text-slate-800 group-hover:text-[#A47E2B]">
                                    <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[11px] text-slate-400 font-bold tracking-wider uppercase">{isAr ? 'الخط المباشر (اضغط للاختيارات)' : 'PHONE (CLICK FOR OPTIONS)'}</p>
                                    <p className="text-sm font-semibold text-slate-800 group-hover:text-[#A47E2B]" dir="ltr">01122422314</p>
                                </div>
                            </div>

                            {/* القائمة المنبثقة الثلاثية الخيارات */}
                            {showPhoneOptions && (
                                <div className={`absolute z-30 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 animate-in fade-in slide-in-from-top-2 duration-200 ${isAr ? 'right-0' : 'left-0'}`}>
                                    <a href="tel:01122422314" className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 rounded-lg transition-colors">
                                        📞 {isAr ? 'اتصال هاتفى مباشر' : 'Direct Call'}
                                    </a>
                                    <a href="https://wa.me/201122422314" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 rounded-lg transition-colors">
                                        💬 {isAr ? 'محادثة واتساب' : 'WhatsApp Chat'}
                                    </a>
                                    <a href="sms:01122422314" className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 rounded-lg transition-colors">
                                        ✉️ {isAr ? 'إرسال رسالة نصية SMS' : 'Send SMS'}
                                    </a>
                                </div>
                            )}
                        </div>

                        {/* المقر الرئيسي */}
                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800">
                                <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[11px] text-slate-400 font-bold tracking-wider uppercase">{isAr ? 'المقر الرئيسي' : 'HEADQUARTERS'}</p>
                                <p className="text-sm font-semibold text-slate-800">{isAr ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* العمود الثاني: كارد الاستمارة الفاخر المبسط تماماً */}
                <div className="lg:col-span-7">
                    <div className="bg-white border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(148,163,184,0.08)]">
                        {submitted ? (
                            <div className="text-center py-12 flex flex-col items-center justify-center">
                                <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 text-emerald-500 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{isAr ? 'تم استلام بياناتك بنجاح' : 'Message Dispatched Successfully!'}</h3>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* حقل الاسم المبسط */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{isAr ? 'الاسم' : 'NAME'}</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder={isAr ? ': الاسم' : 'NAME : '}
                                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                                    />
                                </div>

                                {/* حقل البريد الإلكتروني المبسط */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{isAr ? 'البريد الإلكتروني' : 'EMAIL'}</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="name@example.com"
                                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                                    />
                                </div>

                                {/* 📱 حقل رقم الهاتف الجديد المضاف للفورم */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{isAr ? 'رقم الهاتف' : 'PHONE NUMBER'}</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="01xxxxxxxxx"
                                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200"
                                    />
                                </div>

                                {/* نوع المشروع الرقمي بدون عبارات زائدة */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{isAr ? 'طبيعة المشروع المطلوب' : 'PROJECT TYPE'}</label>
                                    <select
                                        value={formData.projectType}
                                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 cursor-pointer"
                                    >
                                        <option value="custom">{isAr ? 'تطبيق ويب مخصص (Next.js & React)' : 'Custom Modern Web App (Next.js & React)'}</option>
                                        <option value="saas">{isAr ? 'هندسة منصة SaaS أو نظام محاسبة متكامل' : 'Enterprise SaaS / Accounting Platform'}</option>
                                        <option value="brand">{isAr ? 'بناء هوية بصرية رقمية متكاملة للشركات' : 'Corporate Identity & Brand Systems'}</option>
                                    </select>
                                </div>

                                {/* تفاصيل المشروع */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">{isAr ? 'تفاصيل ومتطلبات مشروعك' : 'PROJECT DETAILS'}</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder={isAr ? 'اكتب أهداف مشروعك والأنظمة المطلوب تنفيذها...' : 'Describe your project targets and required systems...'}
                                        className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-slate-900 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 resize-none"
                                    />
                                </div>

                                {/* 🖤 زر إرسال غامق فخم بكتابة وأيقونة دهبية */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-slate-950 hover:bg-slate-800 disabled:bg-slate-300 text-[#C8A85A] font-bold text-sm tracking-wider uppercase py-4 rounded-xl shadow-lg transition-all duration-200 transform active:scale-[0.99] flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-[#C8A85A] border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 stroke-current fill-none text-[#C8A85A]" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                            <span>{isAr ? 'إرسال المتطلبات فوراً' : 'SEND DETAILS'}</span>
                                        </>
                                    )}
                                </button>

                            </form>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}