export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  matchRate: number;
  matchType: string;
  time: string;
  location: string;
  category: string;
}

export interface MoodRecord {
  id: string;
  mood: string;
  intensity: number;
  company: string;
  note: string;
  createdAt: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  bio: string;
  energy: number;
  streak: number;
}

export const userProfile: UserProfile = {
  name: "张小流",
  avatar: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=young%20asian%20woman%20professional%20portrait%20smiling%20office%20background&image_size=portrait_4_3",
  bio: "让生活在记录中流动",
  energy: 85,
  streak: 5,
};

export const activities: Activity[] = [
  {
    id: "1",
    title: "静谧森林漫步",
    description: "通过在大自然中缓慢行走，缓解你最近感到的轻微压力。这里的负离子能有效舒缓身心。",
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=peaceful%20forest%20path%20morning%20light%20through%20trees%20nature%20walk&image_size=landscape_16_9",
    matchRate: 98,
    matchType: "宁静匹配",
    time: "今天 14:00",
    location: "奥林匹克森林",
    category: "户外",
  },
  {
    id: "2",
    title: "都市光影艺术展",
    description: "沉浸式的灯光艺术不仅适合记录生活，更能带给您全新的视觉感官刺激，激发创造力。",
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=modern%20art%20gallery%20light%20installation%20urban%20exhibition&image_size=landscape_16_9",
    matchRate: 85,
    matchType: "灵感匹配",
    time: "明天 10:30",
    location: "朝阳区艺术中心",
    category: "室内",
  },
  {
    id: "3",
    title: "猫咪咖啡厅慢时光",
    description: "与温顺的小动物互动可以显著提升幸福感。这里的环境非常适合您目前的独处需求。",
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cat%20cafe%20cozy%20warm%20atmosphere%20cute%20cats%20relaxing&image_size=landscape_16_9",
    matchRate: 92,
    matchType: "温馨匹配",
    time: "周六 15:00",
    location: "三里屯精品",
    category: "独处",
  },
  {
    id: "4",
    title: "河畔书屋：午后阅读时光",
    description: "在宁静的河畔书屋里阅读，让心灵得到放松。适合深度对话或个人创作。",
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=cozy%20bookstore%20riverside%20reading%20afternoon%20sunlight%20peaceful&image_size=landscape_16_9",
    matchRate: 88,
    matchType: "静谧阅读",
    time: "周三 14:00-17:00",
    location: "楠溪里滨河道",
    category: "独处",
  },
  {
    id: "5",
    title: "极简手冲咖啡体验课",
    description: "学习手冲咖啡的艺术，感受慢生活的美好。",
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=coffee%20brewing%20workshop%20minimalist%20aesthetic%20pour%20over&image_size=landscape_16_9",
    matchRate: 82,
    matchType: "个人创作",
    time: "周四 10:00-12:00",
    location: "南山创意园 302",
    category: "室内",
  },
];

export const moodRecords: MoodRecord[] = [
  {
    id: "1",
    mood: "excited",
    intensity: 8,
    company: "和项目组成员在一起",
    note: "和团队完成了首个里程碑!",
    createdAt: "2小时前",
  },
  {
    id: "2",
    mood: "happy",
    intensity: 6,
    company: "和自己在一起",
    note: "在家附近的公园散步，闻到了花香",
    createdAt: "昨天",
  },
  {
    id: "3",
    mood: "neutral",
    intensity: 4,
    company: "和同事在一起",
    note: "完成了日常工作任务",
    createdAt: "2天前",
  },
];

// 心情选项（与 MoodBadge 严格对应）
export const moodOptions = [
  { key: "angry", label: "愤怒", emoji: "😠" },
  { key: "sad", label: "难过", emoji: "😢" },
  { key: "neutral", label: "一般", emoji: "😐" },
  { key: "happy", label: "开心", emoji: "😊" },
  { key: "excited", label: "激动", emoji: "🤩" },
];

// 陪伴选项
export const companyOptions = [
  { key: "alone", label: "独自一人" },
  { key: "friends", label: "和朋友们" },
  { key: "family", label: "和家人" },
  { key: "partner", label: "和伴侣" },
  { key: "colleagues", label: "和同事" },
];

// 活动分类
export const categoryOptions = [
  { key: "all", label: "全部" },
  { key: "indoor", label: "室内" },
  { key: "outdoor", label: "户外" },
  { key: "social", label: "社交" },
  { key: "alone", label: "独处" },
];

// 偏好分类
export const preferenceCategories = [
  {
    id: "1",
    title: "艺术与手工",
    description: "基于您的创造需求",
    icon: "palette",
    color: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: "2",
    title: "静谧咖啡馆",
    description: "符合您的独处倾向",
    icon: "coffee",
    color: "bg-blue-50",
    textColor: "text-blue-600",
  },
];

// 一周心情统计
export const weeklyMoods = [
  { day: "周一", mood: "happy", level: "高" },
  { day: "周二", mood: "neutral", level: "中" },
  { day: "周三", mood: "excited", level: "极高" },
  { day: "周四", mood: "sad", level: "低" },
  { day: "周五", mood: "neutral", level: "中" },
];
