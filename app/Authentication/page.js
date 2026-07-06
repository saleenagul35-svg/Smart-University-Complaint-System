"use client";
import Image from "next/image";
import Link from "next/link";

export default function RoleSelection() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Background image */}
      <Image
        src="https://res.cloudinary.com/dvu3gnyjt/image/upload/v1783256356/university_qj4knm.png"
        alt="university background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#141208]/35 to-[#141208]/62 backdrop-brightness-[0.88] backdrop-saturate-[1.1]" />

      {/* Center content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-10">
        
        {/* Branding */}
        <div className="text-center mb-9 animate-[fadeUp_0.6s_0.1s_cubic-bezier(0.16,1,0.3,1)_both]">
          <div className="inline-flex items-center gap-2.5 mb-2.5">
            <span className="text-[26px]">📚</span>
            <span className="font-serif text-[30px] font-bold text-[#fffff3] tracking-[0.4px]">
              ResolveHub
            </span>
          </div>
          <p className="text-[11px] text-[#fffff3]/45 tracking-[2.5px] uppercase">
            Smart University Complaint System
          </p>
        </div>

        {/* Single Card */}
        <div className="bg-[#fffff3]/10 backdrop-blur-[20px] backdrop-saturate-[1.4] border border-[#fffff3]/18 rounded-[24px] p-10 w-full max-w-[400px] shadow-[0_24px_80px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,243,0.12)] text-center animate-[fadeUp_0.6s_0.25s_cubic-bezier(0.16,1,0.3,1)_both]">
          
          {/* Heading */}
          <h1 className="font-serif text-[30px] font-bold text-[#fffff3] leading-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-[13px] text-[#fffff3]/50 font-light mb-9 leading-relaxed">
            Select your role to sign in
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#fffff3]/15 to-transparent mb-7" />

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            {/* Admin/HOD Buttons */}
            <Link
              href="/Authentication/hod"
              className="w-full py-[14px] px-5 rounded-[11px] bg-[#1b333c] text-[#fffff3] text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_6px_20px_rgba(134,76,37,0.32)]"
            >
              <span>🗝️</span> Continue as HOD
            </Link>
            
            <Link
              href="/Authentication/admin"
              className="w-full py-[14px] px-5 rounded-[11px] bg-[#2b4b58] text-[#fffff3] text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0 shadow-[0_6px_20px_rgba(134,76,37,0.32)]"
            >
              <span>🔑</span> Continue as Admin
            </Link>

            {/* Member */}
            <Link
              href="/Authentication/user/login"
              className="w-full py-[14px] px-5 rounded-[12px] border border-[#fffff3]/25 bg-[#fffff3]/8 text-[#fffff3] text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>📖</span> Continue as Student
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-[11px] text-[#fffff3]/22 tracking-[0.4px] animate-[fadeUp_0.6s_0.25s_cubic-bezier(0.16,1,0.3,1)_both]">
          💫 ResolveHub — All rights reserved
        </p>
      </div>
    </div>
  );
}