import { Home, Compass, Plus, User } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { key: "home", label: "主页", icon: Home },
    { key: "explore", label: "探索", icon: Compass },
    { key: "create", label: "", icon: Plus },
    { key: "profile", label: "我的", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 safe-area-bottom z-50">
      <div className="max-w-md mx-auto flex items-center justify-around h-16 relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          const isCreate = tab.key === "create";

          // 中间凸起的发布按钮
          if (isCreate) {
            return (
              <button
                key={tab.key}
                onClick={() => onTabChange(tab.key)}
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <Icon className="w-6 h-6 text-white" />
              </button>
            );
          }

          // 普通导航按钮
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className="flex flex-col items-center justify-center w-16 h-full"
            >
              <Icon
                className={`w-5 h-5 mb-1 transition-colors ${
                  isActive ? "text-[#5d5dff]" : "text-gray-400"
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  isActive ? "text-[#5d5dff]" : "text-gray-400"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
