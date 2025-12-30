import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center">
        <div className="max-w-7xl w-full mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-blue-600">
            MyService
          </h1>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm font-medium">
            <a href="/" className="hover:text-blue-600 transition">
              홈
            </a>
            <a href="/about" className="hover:text-blue-600 transition">
              소개
            </a>
            <a href="/mypage" className="hover:text-blue-600 transition">
              마이페이지
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500 flex justify-between">
          <span>© 2025 MyService. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-gray-700">
              이용약관
            </a>
            <a href="/privacy" className="hover:text-gray-700">
              개인정보처리방침
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
