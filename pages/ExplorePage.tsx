import { Search, SlidersHorizontal, Palette, Coffee } from "lucide-react";
import { activities, categoryOptions, preferenceCategories, userProfile } from "@/data/mock";
import { ActivityCard } from "@/components/ActivityCard";
import { useState } from "react";

export function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory = activeCategory === "all" || 
      (activeCategory === "indoor" && activity.category === "室内") ||
      (activeCategory === "outdoor" && activity.category === "户外") ||
      (activeCategory === "alone" && activity.category === "独处") ||
      (activeCategory === "social" && activity.category === "社交");
    
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-white px-4 pt-12 pb-6 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-800">为您推荐</h1>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-primary-100"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">当前心情：平静</span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
              <p className="text-xs text-gray-500">为您找到 12 个适配方案</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="搜索活动或地点..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
          />
        </div>
      </header>

      <main className="px-4 mt-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categoryOptions.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.key
                  ? "bg-primary-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <section className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">今日匹配</h3>
            <button className="text-sm text-primary-500">查看全部</button>
          </div>
          
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无匹配的活动</p>
            </div>
          )}
        </section>

        <section className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">按偏好探索</h3>
          <div className="grid grid-cols-2 gap-3">
            {preferenceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id === "1" ? "indoor" : "alone")}
                className={`${category.color} rounded-xl p-4 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]`}
              >
                <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center mb-3`}>
                  {category.icon === "palette" ? (
                    <Palette className={`w-5 h-5 ${category.textColor}`} />
                  ) : (
                    <Coffee className={`w-5 h-5 ${category.textColor}`} />
                  )}
                </div>
                <h4 className={`font-semibold ${category.textColor}`}>{category.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ExplorePage;
