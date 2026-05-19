import { Share2, Search, TrendingUp, ArrowRight } from "lucide-react";
import { activities, moodRecords, weeklyMoods } from "@/data/mock";
import { ActivityCard } from "@/components/ActivityCard";
import { MoodBadge, getMoodEmoji } from "@/components/MoodBadge";

export function HomePage() {
  const featuredActivities = activities.slice(3, 5);
  const recentRecords = moodRecords.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-400 text-white px-4 pt-12 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            <span className="text-sm opacity-80">分享今日心情</span>
          </div>
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
        
        <h1 className="text-2xl font-bold mb-1">早上好，晨曦</h1>
        <h2 className="text-xl font-medium mb-6">今天感觉如何?</h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">社交电量</span>
            </div>
            <span className="text-sm font-semibold">65%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 mb-3">
            <div className="bg-white rounded-full h-2 w-[65%] transition-all duration-500" />
          </div>
          <p className="text-xs opacity-80">当前的社交状态适合进行小规模的深度对话或个人创作。</p>
        </div>
      </header>

      <main className="px-4 mt-4">
        <section className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-800">情绪周报</h3>
            <button className="text-sm text-primary-500 flex items-center gap-1 hover:gap-2 transition-all">
              查看趋势 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {weeklyMoods.map((day, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl p-3 shadow-card min-w-[64px] text-center"
              >
                <div className="text-xs text-gray-500 mb-2">{day.day}</div>
                <MoodBadge mood={day.mood} size="sm" />
                <div className={`text-xs mt-2 ${
                  day.level === "高" || day.level === "极高" ? "text-green-600" :
                  day.level === "中" ? "text-yellow-600" : "text-red-500"
                }`}>
                  {day.level}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">为你定制</h3>
          <p className="text-sm text-gray-500 mb-4">基于你当前的宁静状态和剩余电量</p>
          
          {featuredActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">最近记录</h3>
          <div className="space-y-3">
            {recentRecords.map((record) => (
              <div
                key={record.id}
                className="bg-white rounded-xl p-4 shadow-card flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                  {getMoodEmoji(record.mood)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 truncate">{record.note}</p>
                  <p className="text-xs text-gray-500">{record.company}</p>
                </div>
                <span className="text-xs text-gray-400">{record.createdAt}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
