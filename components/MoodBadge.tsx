interface MoodBadgeProps {
  mood: string;
  size?: "sm" | "md" | "lg";
}

const moodConfig: Record<string, { emoji: string; level: string; color: string }> = {
  angry: { emoji: "😠", level: "低", color: "bg-red-100" },
  sad: { emoji: "😢", level: "低", color: "bg-blue-100" },
  neutral: { emoji: "😐", level: "中", color: "bg-gray-100" },
  happy: { emoji: "😊", level: "高", color: "bg-yellow-100" },
  excited: { emoji: "🤩", level: "极高", color: "bg-orange-100" },
};

export function MoodBadge({ mood, size = "md" }: MoodBadgeProps) {
  const config = moodConfig[mood] || moodConfig.neutral;
  
  const sizeClasses = {
    sm: "w-10 h-10 text-lg",
    md: "w-12 h-12 text-xl",
    lg: "w-16 h-16 text-2xl",
  };

  return (
    <div className={`${sizeClasses[size]} ${config.color} rounded-xl flex items-center justify-center`}>
      <span>{config.emoji}</span>
    </div>
  );
}

export function getMoodEmoji(mood: string): string {
  return moodConfig[mood]?.emoji || "😐";
}
