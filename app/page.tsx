"use client";

import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { HomePage } from "@/pages/HomePage";
import { ExplorePage } from "@/pages/ExplorePage";
import { CreateRecordPage } from "@/pages/CreateRecordPage";
import { ProfilePage } from "@/pages/ProfilePage";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleNavigate = (page: string) => {
    setActiveTab(page);
  };

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
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={handleNavigate} />
    </div>
  );
}
