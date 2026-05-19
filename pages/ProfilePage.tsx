import { Settings, User, Shield, Cloud, Bell, History, FileOutput, LogOut } from "lucide-react";
import { userProfile } from "@/data/mock";
import { useState } from "react";

interface MenuItem {
  icon: typeof User;
  title: string;
  description: string;
  hasToggle?: boolean;
  toggleValue?: boolean;
}

export function ProfilePage() {
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const accountMenuItems: MenuItem[] = [
    { icon: User, title: "个人资料", description: "编辑姓名、头像及个人简介" },
    { icon: Shield, title: "账号安全", description: "修改密码、绑定手机或邮箱" },
    { icon: Cloud, title: "自动云同步", description: "跨设备实时同步记录", hasToggle: true, toggleValue: syncEnabled },
  ];

  const interactionMenuItems: MenuItem[] = [
    { icon: Bell, title: "智能活动推送", description: "基于心情状态为您精准推荐方案", hasToggle: true, toggleValue: notificationsEnabled },
  ];

  const dataMenuItems: MenuItem[] = [
    { icon: History, title: "历史记录管理", description: "回顾并管理所有的心情日志" },
    { icon: FileOutput, title: "数据导出选项", description: "支持导出为 PDF 或 JSON 格式" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-white px-4 pt-12 pb-6 shadow-sm">
        <div className="flex items-center justify-end mb-6">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <h1 className="text-xl font-bold text-gray-800 mb-1">{userProfile.name}</h1>
          <p className="text-sm text-gray-500 mb-4">{userProfile.bio}</p>
          
          <div className="w-full max-w-xs bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">当前能量值</span>
              <span className="bg-secondary-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                情绪稳定
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-secondary-600">{userProfile.energy}</span>
              <span className="text-gray-500">/ 100</span>
            </div>
            <div className="w-full bg-white/50 rounded-full h-2 mt-3">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2 w-[85%] transition-all duration-500" />
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 mt-4 space-y-4">
        <section>
          <h3 className="text-sm font-semibold text-gray-500 mb-3 px-1">账户与首选项</h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-card">
            {accountMenuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.hasToggle) {
                    if (item.title === "自动云同步") {
                      setSyncEnabled(!syncEnabled);
                    }
                  }
                }}
                className={`w-full flex items-center gap-4 p-4 transition-colors hover:bg-gray-50 ${
                  index !== accountMenuItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue-500" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-medium text-gray-800">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                {item.hasToggle ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.title === "自动云同步") {
                        setSyncEnabled(!syncEnabled);
                      }
                    }}
                    className={`relative w-12 h-7 rounded-full transition-colors ${
                      item.toggleValue ? "bg-primary-500" : "bg-gray-300"
                    }`}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      item.toggleValue ? "translate-x-6" : "translate-x-1"
                    }`} />
                  </button>
                ) : (
                  <span className="text-gray-400">›</span>
                )}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-gray-500 mb-3 px-1">交互与提醒</h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-card">
            {interactionMenuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  if (item.hasToggle) {
                    if (item.title === "智能活动推送") {
                      setNotificationsEnabled(!notificationsEnabled);
                    }
                  }
                }}
                className={`w-full flex items-center gap-4 p-4 transition-colors hover:bg-gray-50 ${
                  index !== interactionMenuItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-amber-500" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-medium text-gray-800">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                {item.hasToggle ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (item.title === "智能活动推送") {
                        setNotificationsEnabled(!notificationsEnabled);
                      }
                    }}
                    className={`relative w-12 h-7 rounded-full transition-colors ${
                      item.toggleValue ? "bg-primary-500" : "bg-gray-300"
                    }`}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                      item.toggleValue ? "translate-x-6" : "translate-x-1"
                    }`} />
                  </button>
                ) : (
                  <span className="text-gray-400">›</span>
                )}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-gray-500 mb-3 px-1">数据资产</h3>
          <div className="bg-white rounded-2xl overflow-hidden shadow-card">
            {dataMenuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-4 p-4 transition-colors hover:bg-gray-50 ${
                  index !== dataMenuItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-medium text-gray-800">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <span className="text-gray-400">›</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <button className="w-full bg-white border border-red-200 text-red-500 py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            退出当前账号
          </button>
        </section>

        <section className="text-center py-6">
          <p className="text-xs text-gray-400">LifeFlow v2.4.0 · 记录生活的点滴</p>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
