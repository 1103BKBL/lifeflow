"use client";

import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { HomePage } from "@/pages/HomePage";
import { ExplorePage } from "@/pages/ExplorePage";
import { CreateRecordPage } from "@/pages/CreateRecordPage";
import { ProfilePage } from "@/pages/ProfilePage";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  // 切换页面
  const handleNavigate = (page: string) => {
    setActiveTab(page);
  };

  // 渲染当前页面
  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "explore":
        return <ExplorePage />;
      case "create":
        return <CreateRecordPage onNavigate={handleNavigate} />;
      case "profile":
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    // 最外层容器：占满屏幕 + 相对定位（让底部导航固定生效）
    <div className="relative h-screen overflow-hidden bg-gray-50">
      
      {/* 内容区域：滚动 + 留出底部导航高度 + 安全区适配 */}
      <main className="h-full overflow-y-auto pb-20 safe-area-bottom">
        {renderPage()}
      </main>

      {/* 底部导航：固定在底部 + 居中（和根布局匹配） */}
      <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-md">
        <BottomNav activeTab={activeTab} onTabChange={handleNavigate} />
      </div>

    </div>
  );
}
