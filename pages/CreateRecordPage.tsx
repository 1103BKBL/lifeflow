import { useState } from "react";
import { ArrowLeft, ImagePlus, Sparkles, TrendingUp } from "lucide-react";
import { moodOptions, companyOptions, userProfile } from "@/data/mock";

interface CreateRecordPageProps {
  onNavigate: (page: string) => void;
}

export function CreateRecordPage({ onNavigate }: CreateRecordPageProps) {
  const [selectedMood, setSelectedMood] = useState("happy");
  const [intensity, setIntensity] = useState(6);
  const [selectedCompany, setSelectedCompany] = useState("alone");
  const [note, setNote] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      onNavigate("explore");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <header className="bg-white px-4 pt-12 pb-4 flex items-center gap-4 shadow-sm">
        <button
          onClick={() => onNavigate("home")}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">新建记录</h1>
      </header>

      <main className="px-4 mt-4 space-y-6">
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">此时心情</h2>
          <p className="text-sm text-gray-500 mb-4">记录你此刻的真实感受</p>
          
          <div className="flex justify-between mb-6">
            {moodOptions.map((mood) => (
              <button
                key={mood.key}
                onClick={() => setSelectedMood(mood.key)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                  selectedMood === mood.key
                    ? "bg-primary-50 ring-2 ring-primary-500"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <span className="text-3xl">{mood.emoji}</span>
                <span className={`text-xs font-medium ${
                  selectedMood === mood.key ? "text-primary-500" : "text-gray-500"
                }`}>
                  {mood.label}
                </span>
              </button>
            ))}
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>平静</span>
              <span>强烈情绪</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="1"
                max="10"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-primary-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <span key={i} className={i === intensity ? "text-primary-500 font-medium" : ""}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">此时此刻你和谁在一起?</h2>
          <div className="grid grid-cols-3 gap-2">
            {companyOptions.map((company) => (
              <button
                key={company.key}
                onClick={() => setSelectedCompany(company.key)}
                className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  selectedCompany === company.key
                    ? "bg-secondary-500 text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {company.label}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-2">发生了什么有趣的事?</h2>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="分享一下你现在的想法吧..."
            className="w-full bg-gray-50 rounded-xl p-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none h-32"
          />
        </section>

        <section>
          <button className="w-full bg-gray-50 rounded-xl p-8 flex flex-col items-center gap-2 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <ImagePlus className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-sm text-gray-500">添加照片</span>
          </button>
        </section>

        <section className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
          <img
            src={userProfile.avatar}
            alt={userProfile.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">今天也是值得被记录的一天</p>
            <p className="text-xs text-gray-500">已连续记录 {userProfile.streak} 天</p>
          </div>
          <button className="p-2 hover:bg-blue-100 rounded-full transition-colors">
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </button>
        </section>
      </main>

      <div className="fixed bottom-20 left-0 right-0 px-4">
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full bg-gradient-primary text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 active:scale-[0.98] disabled:opacity-70"
        >
          {isGenerating ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              生成中...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              生成智能推荐活动
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default CreateRecordPage;
