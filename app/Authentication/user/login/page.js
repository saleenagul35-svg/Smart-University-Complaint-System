"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, ShieldCheck, Loader2 } from "lucide-react";
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Enter your email and password to continue.");
      return;
    }
    setLoading(true);
    // Backend call will be wired here later
    //===================== backend API ======================//
    try {
      const response = await fetch("http://localhost:5000/api/adminVerification", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)


      })
      const data = await response.json()
      if (response.ok) {


        localStorage.setItem("Admintoken", data.accessToken)
        document.cookie = `Admintoken=${data.accessToken}; path=/; max-age=${2 * 60 * 60}`
        router.push("/dashboard")

      } else {
        setAlert(`${data.message}`)
      }


    } catch (error) {
      setAlert("Something went wrong.")
    } finally {
      setTimeout(() => setLoading(false), 1200);

    }
    //==================End===================//

  };
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [alert])
  return (
    <div className="min-h-screen w-full flex bg-[#0B1220]">
      {/* Left brand panel */}
      <div className="hidden lg:flex lg:w-[42%] relative overflow-hidden bg-[#3B5F6D]">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 38px, #ffffff 39px), repeating-linear-gradient(90deg, transparent, transparent 38px, #ffffff 39px)",
          }}
        />
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-[#3B5F6D] flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">
              Dynamic Security
            </span>
          </div>

          <div>
            <div className="h-px w-12 bg-[#3B5F6D] mb-6" />
            <h1 className="text-white text-[2.75rem] leading-[1.1] font-semibold tracking-tight mb-4">
              Control center for
              <br />
              everything your
              <br />
              site shows.
            </h1>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              Manage pages, services and blog content from one
              place — built for the team running Dynamic Security
              day to day.
            </p>
          </div>

          <p className="text-slate-500 text-xs tracking-wide">
            admin.dynamicsecurity.co.uk
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 bg-[#F8F9FB]">
        <div className="w-full max-w-[380px]">
          {/* Mobile brand mark */}
          <div className="flex lg:hidden items-center gap-2.5 mb-10">
            <div className="h-9 w-9 rounded-md bg-[#3B5F6D] flex items-center justify-center">
              <ShieldCheck className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[#0F172A] font-semibold tracking-tight">
              Dynamic Security
            </span>
          </div>

          <h2 className="text-[#0F172A] text-2xl font-semibold tracking-tight mb-1.5">
            Sign in
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Enter your credentials to access the admin panel.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-sm text-[#DC2626] bg-red-50 border border-red-100 rounded-md px-3.5 py-2.5">
                {error}
              </div>
            )}

            <div>
              <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@dynamicsecurity.co.uk"
                className="w-full h-11 rounded-md border border-slate-200 bg-white px-3.5 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-colors focus:border-[#3B5F6D] focus:ring-2 focus:ring-[#3B5F6D]/15"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[13px] font-medium text-slate-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[13px] text-[#3B5F6D] hover:text-[#223a43] font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full h-11 rounded-md border border-slate-200 bg-white px-3.5 pr-10 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-colors focus:border-[#3B5F6D] focus:ring-2 focus:ring-[#3B5F6D]/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-md bg-[#3B5F6D] text-white text-sm font-medium tracking-tight hover:bg-[#2e4a54] active:bg-[#2e4a54] transition-colors disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <p className="text-center text-[13px] text-slate-400 mt-10">
            Restricted access · Dynamic Security Solutions Ltd
          </p>
        </div>
      </div>
      {/* {alert && <Stack spacing={2} className="fixed top-5 right-16 w-100 ">
        <Alert sx={{ backgroundColor: "#3B5F6D", color:"white" }} severity="error">{alert}</Alert>
      </Stack>} */}
    </div>
  );
}