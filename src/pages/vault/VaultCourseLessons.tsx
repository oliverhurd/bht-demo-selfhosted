import React, { useEffect, useState } from 'react';
import { VaultLayout } from '../../components/VaultLayout';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronUp,
  FileText,
  Download
} from 'lucide-react';

// Video mapping for Inception Model Narrative module
const VIDEO_URLS: Record<string, string> = {
  'im-weekly-bias': 'Wgds6ZWIqSU',
  'im-weekly-timing': 'uK-Pw04teEc',
  'im-weekly-anchor': 'A-X7gBaJsAI',
};

// Mock Data Types
type Lesson = {
  id: string;
  title: string;
  completed: boolean;
  duration?: string;
};
type Module = {
  title: string;
  lessons: Lesson[];
};
type CourseData = {
  id: string;
  title: string;
  modules: Module[];
};

// Mock Data (same as before, truncated for brevity - use your existing data)
const COURSES_DATA: Record<string, CourseData> = {
  'inception-model': {
    id: 'inception-model',
    title: 'The Inception Model',
    modules: [
      {
        title: 'DISCLAIMER',
        lessons: [
          {
            id: 'im-disclaimer',
            title: 'Disclaimer',
            completed: true
          }
        ]
      },
      {
        title: 'Narrative',
        lessons: [
          {
            id: 'im-weekly-bias',
            title: "Weekly Range's Directional Bias",
            completed: true
          },
          {
            id: 'im-weekly-timing',
            title: "Weekly Range's Timing Bias",
            completed: true
          },
          {
            id: 'im-weekly-anchor',
            title: "Weekly Range's Anchor Point",
            completed: true
          }
        ]
      }
    ]
  }
};

export function VaultCourseLessons() {
  const { courseId } = useParams();
  const course = courseId ? COURSES_DATA[courseId] : null;
  
  const [activeLessonId, setActiveLessonId] = useState<string>('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (course) {
      if (course.modules.length > 0 && course.modules[0].lessons.length > 0) {
        setActiveLessonId(course.modules[0].lessons[0].id);
      }
      const initialExpanded: Record<string, boolean> = {};
      course.modules.forEach((m, idx) => {
        initialExpanded[idx] = true;
      });
      setExpandedModules(initialExpanded);
    }
  }, [course]);

  if (!course) {
    return (
      <VaultLayout>
        <div>Course not found</div>
      </VaultLayout>
    );
  }

  const activeLesson = course.modules
    .flatMap((m) => m.lessons)
    .find((l) => l.id === activeLessonId);

  const toggleModule = (idx: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Get YouTube video ID for current lesson
  const videoId = activeLessonId ? VIDEO_URLS[activeLessonId] : null;

  return (
    <VaultLayout>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* LEFT SIDEBAR - MODULE LIST */}
        <div className="w-full lg:w-80 flex-shrink-0 bg-bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-4 border-b border-border bg-bg-elevated">
            <Link
              to="/vault"
              className="flex items-center gap-2 text-xs text-text-secondary hover:text-gold mb-3"
            >
              <ArrowLeft size={12} /> Back to Classroom
            </Link>
            <h2 className="font-serif font-bold text-text-primary text-lg leading-tight mb-2">
              {course.title}
            </h2>
            <div className="w-full bg-bg h-1.5 rounded-full overflow-hidden border border-border">
              <div className="bg-[#00A86B] h-full w-full"></div>
            </div>
            <div className="text-[10px] text-[#00A86B] font-mono mt-1 font-bold">
              100% COMPLETE
            </div>
          </div>

          <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
            {course.modules.map((module, idx) => (
              <div key={idx} className="border-b border-border last:border-0">
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full flex items-center justify-between p-4 bg-bg-card hover:bg-bg-elevated transition-colors text-left"
                >
                  <span className="font-bold text-sm text-text-primary">
                    {module.title}
                  </span>
                  {expandedModules[idx] ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {expandedModules[idx] && (
                  <div className="bg-bg">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLessonId(lesson.id)}
                        className={`w-full flex items-start gap-3 p-3 pl-4 text-left transition-colors border-l-2 ${
                          activeLessonId === lesson.id
                            ? 'bg-bg-elevated border-gold'
                            : 'border-transparent hover:bg-bg-elevated'
                        }`}
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          {lesson.completed ? (
                            <CheckCircle
                              size={16}
                              className="text-[#00A86B]"
                              fill="currentColor"
                              stroke="black"
                            />
                          ) : (
                            <Circle size={16} className="text-text-muted" />
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            activeLessonId === lesson.id
                              ? 'text-gold font-medium'
                              : 'text-text-secondary'
                          }`}
                        >
                          {lesson.title}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT - LESSON PLAYER */}
        <div className="flex-grow w-full">
          {activeLesson && (
            <div className="bg-bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={24}
                    className="text-[#00A86B]"
                    fill="currentColor"
                    stroke="black"
                  />
                  <h1 className="text-2xl md:text-3xl font-serif font-bold text-text-primary">
                    {activeLesson.title}
                  </h1>
                </div>
              </div>

              {/* YouTube Video Player */}
              {videoId ? (
                <div className="w-full aspect-video bg-black rounded-lg border border-border mb-8 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={activeLesson.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-black rounded-lg border border-border mb-8 flex items-center justify-center">
                  <p className="text-text-muted font-mono text-sm">No video available for this lesson</p>
                </div>
              )}

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Rundown:
                  </h3>
                  <div className="prose prose-invert max-w-none text-text-secondary font-mono text-sm leading-relaxed">
                    <h4 className="text-text-primary font-bold mb-2">
                      How to find Directional Bias
                    </h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Identify, follow and respect the Weekly Chart's IOF
                        (Institutional Order Flow)
                      </li>
                      <li>
                        Identify a ST (Short Term) and LT (Long Term) DOL (Draw
                        on Liquidity) in the direction of Weekly IOF
                      </li>
                      <li>
                        End and stop the Directional Bias at Terminus (or at the
                        end of TIME-LINE)
                      </li>
                    </ol>
                    <p className="mt-4">
                      This lesson breaks down the exact process for determining
                      daily and weekly bias using the Inception Model framework.
                      Focus on the relationship between time and price.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">
                    Resources
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="flex items-center gap-3 p-3 bg-bg-elevated border border-border rounded hover:border-gold transition-colors group"
                    >
                      <div className="w-8 h-8 bg-[#FF4433]/10 rounded flex items-center justify-center text-[#FF4433]">
                        <FileText size={16} />
                      </div>
                      <span className="text-sm text-text-primary group-hover:text-gold transition-colors">
                        Narrative - Directional Bias.pdf
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </VaultLayout>
  );
}
