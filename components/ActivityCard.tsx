import { Clock, MapPin, Heart } from "lucide-react";
import { Activity } from "@/types";
import { useState } from "react";

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToSchedule = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-4 transition-all duration-300 hover:shadow-lg">
      {/* 图片区域 */}
      <div className="relative">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-3 left-3">
          {/* 使用你 CSS 里的 --secondary 变量 */}
          <span className="bg-[#e44dff] text-white text-xs px-3 py-1 rounded-full font-medium">
            {activity.matchType}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#5d5dff]" />
          <span className="text-xs font-medium text-gray-700">{activity.matchRate}%匹配</span>
        </div>
      </div>
      
      {/* 内容区域 */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{activity.description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{activity.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{activity.location}</span>
          </div>
        </div>
        
        {/* 按钮区域 */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleAddToSchedule}
            className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
              isAdded
                ? "bg-green-100 text-green-600"
                : "bg-[#5d5dff] text-white hover:bg-[#4d4dff] active:scale-95"
            }`}
          >
            {isAdded ? (
              <>✓ 已加入行程</>
            ) : (
              <>+ 加入行程</>
            )}
          </button>
          
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
              isFavorite ? "bg-red-50 text-red-500" : "bg-gray-50 text-gray-400 hover:bg-gray-100"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
