import React from "react";
import myImage from "../assets/logoLogin.jpg";

function Login() {
  return (
    // Lớp nền xanh chính phủ toàn bộ màn hình
    <div className="bg-[#055cb9da]">
      <div className="max-w-7xl mx-auto h-screen flex items-center justify-center gap-45 p-6">

        {/* Khối Ảnh Logo phía trên */}
        <img
          src={myImage}
          className="rounded-[30px] w-150 h-auto object-contain"
          alt="Logo"
        />

        {/* Tấm thẻ trắng (Card) chứa Form */}
        <div className="bg-white w-full h-130 max-w-112.5 p-10 rounded-[40px] shadow-2xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            Đăng nhập
          </h1>

          <div>
            <label className="block text-slate-700 font-bold mb-3">
              Email
            </label>
            <input
              type="email"
              placeholder="Nhập email đăng nhập"
              className="w-full pl-14 pr-4 py-5 bg-[#ebf4ff] border-none rounded-[10px] outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="mt-6">
            <div className="flex justify-between mb-3">
              <label className="text-slate-700 font-bold">
                Password
              </label>
              <a
                href="#"
                className="text-blue-500 font-bold text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-14 pr-14 py-5 bg-[#ebf4ff] border-none rounded-[10px] outline-none focus:ring-2 focus:ring-blue-300"
              />
              <span className="absolute inset-y-0 right-5 flex items-center text-slate-400 cursor-pointer">
                👁️
              </span>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full bg-[#63b3ed] hover:bg-blue-500 text-white font-bold py-5 rounded-[10px] text-xl transition-all active:scale-95 shadow-lg shadow-blue-200"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
