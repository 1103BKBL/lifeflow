interface MoodBadgeProps {
  mood: string;
  size?: "sm" | "md" | "lg";
}

const moodConfig: Record<string, { emoji: string; level: string; color: string }> = {
  angry: { emoji: "😠", level: "低", color: "bg-red-100 text-red-600" },
  sad: { emoji: "😢", level: "低", color: "bg-blue-100 text-blue-600" },
  neutral: { emoji: "😐", level: "中", color: "bg-gray-100 text-gray-600" },
  happy: { emoji: "😊", level: "高", color: "bg-yellow-100 text-yellow-700" },
  excited: { emoji: "🤩", level: "极高", color: "bg-orange-100 text-orange-600" },
};

export function MoodBadge({ mood, size = "md" }: MoodBadgeProps) {
  // 兜底：不存在的心情默认显示 neutral
  const config = moodConfig[mood.toLowerCase()] || moodConfig.neutral;

  const sizeClasses = {
    sm: "w-10 h-10 text-lg rounded-lg",
    md: "w-12 h-12 text-xl rounded-xl",
    lg: "w-16 h-16 text-2xl rounded-2xl",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${config.color}
        flex items-center justify-center
        transition-all duration-300 hover:scale-105
      `}
    >
      <span>{config.emoji}</span>
    </div>
  );
}

// 获取心情表情工具函数（保留）
export function getMoodEmoji(mood: string): string {
  return moodConfig[mood.toLowerCase()]?.emoji || moodConfig.neutral.emoji;
}
