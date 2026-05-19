import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 优化字体加载（包含中文更顺滑）
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // 防止字体加载闪烁
  variable: "--font-inter", // 方便 CSS 调用
});

export const metadata: Metadata = {
  title: "LifeFlow - 记录生活的点滴",
  description: "记录心情，发现美好活动",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="antialiased max-w-md mx-auto bg-gray-50 relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
