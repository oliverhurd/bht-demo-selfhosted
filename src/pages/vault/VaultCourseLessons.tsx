import React, { useEffect, useState } from 'react';
import { VaultLayout } from '../../components/VaultLayout';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronUp,
  Play,
  FileText,
  Download,
  Edit2 } from
'lucide-react';
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
// Mock Data
const COURSES_DATA: Record<string, CourseData> = {
  'market-structure': {
    id: 'market-structure',
    title: 'Market Structure (Basics)',
    modules: [
    {
      title: 'Introduction',
      lessons: [
      {
        id: 'ms-welcome',
        title: 'Welcome',
        completed: true
      },
      {
        id: 'ms-disclaimer',
        title: 'Disclaimer',
        completed: true
      }]

    },
    {
      title: 'Basics',
      lessons: [
      {
        id: 'ms-what-is',
        title: 'What is Market Structure',
        completed: true
      },
      {
        id: 'ms-swing',
        title: 'Swing Highs & Lows',
        completed: true
      },
      {
        id: 'ms-trend',
        title: 'Trend Identification',
        completed: true
      }]

    },
    {
      title: 'Structure Shifts',
      lessons: [
      {
        id: 'ms-bos',
        title: 'Break of Structure (BOS)',
        completed: true
      },
      {
        id: 'ms-mss',
        title: 'Market Structure Shift (MSS)',
        completed: true
      },
      {
        id: 'ms-choch',
        title: 'Change of Character',
        completed: true
      }]

    },
    {
      title: 'Application',
      lessons: [
      {
        id: 'ms-mtf',
        title: 'Multi-Timeframe Analysis',
        completed: true
      },
      {
        id: 'ms-mapping',
        title: 'Mapping Structure',
        completed: true
      },
      {
        id: 'ms-examples',
        title: 'Practice Examples',
        completed: true
      }]

    }]

  },
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
      }]

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
      }]

    },
    {
      title: 'Framework',
      lessons: [
      {
        id: 'im-daily-context',
        title: "Daily Range's Context",
        completed: true
      },
      {
        id: 'im-daily-targets',
        title: "Daily Range's Targets",
        completed: true
      },
      {
        id: 'im-daily-profile',
        title: "Daily Range's Profile (intra-day)",
        completed: true
      }]

    },
    {
      title: 'Model',
      lessons: [
      {
        id: 'im-system',
        title: 'The Inception System',
        completed: true
      },
      {
        id: 'im-ideas',
        title: 'Trade Ideas',
        completed: true
      },
      {
        id: 'im-execution',
        title: 'Ideas to Execution',
        completed: true
      },
      {
        id: 'im-terminus',
        title: 'Execution to Terminus',
        completed: true
      }]

    },
    {
      title: 'Trade Idea',
      lessons: [
      {
        id: 'im-bull-flag',
        title: 'Pseudo Bull Flag (Reversal Setup)',
        completed: true
      },
      {
        id: 'im-exhaustion',
        title: '3 Drive Exhaustion (Reversal Setup)',
        completed: true
      },
      {
        id: 'im-bpr',
        title: 'BPR (Reversal + Low Risk Setup)',
        completed: true
      }]

    }]

  },
  'frameworks-amplified': {
    id: 'frameworks-amplified',
    title: 'Frameworks Amplified',
    modules: [
    {
      title: 'Introduction',
      lessons: [
      {
        id: 'fa-overview',
        title: 'Course Overview',
        completed: true
      },
      {
        id: 'fa-prereq',
        title: 'Prerequisites',
        completed: true
      }]

    },
    {
      title: 'Advanced Frameworks',
      lessons: [
      {
        id: 'fa-iof',
        title: 'Institutional Order Flow',
        completed: true
      },
      {
        id: 'fa-smc',
        title: 'Smart Money Concepts',
        completed: true
      },
      {
        id: 'fa-liquidity',
        title: 'Liquidity Engineering',
        completed: true
      }]

    },
    {
      title: 'Execution',
      lessons: [
      {
        id: 'fa-entry',
        title: 'Entry Models',
        completed: true
      },
      {
        id: 'fa-risk',
        title: 'Risk Management Advanced',
        completed: true
      },
      {
        id: 'fa-sizing',
        title: 'Position Sizing',
        completed: true
      }]

    },
    {
      title: 'Live Examples',
      lessons: [
      {
        id: 'fa-ex1',
        title: 'Trade Breakdown 1',
        completed: true
      },
      {
        id: 'fa-ex2',
        title: 'Trade Breakdown 2',
        completed: true
      },
      {
        id: 'fa-ex3',
        title: 'Trade Breakdown 3',
        completed: true
      }]

    }]

  }
};
export function VaultCourseLessons() {
  const { courseId } = useParams();
  const course = courseId ? COURSES_DATA[courseId] : null;
  // State
  const [activeLessonId, setActiveLessonId] = useState<string>('');
  const [expandedModules, setExpandedModules] = useState<
    Record<string, boolean>>(
    {});
  // Initialize state when course loads
  useEffect(() => {
    if (course) {
      // Set first lesson as active
      if (course.modules.length > 0 && course.modules[0].lessons.length > 0) {
        setActiveLessonId(course.modules[0].lessons[0].id);
      }
      // Expand all modules by default
      const initialExpanded: Record<string, boolean> = {};
      course.modules.forEach((m, idx) => {
        initialExpanded[idx] = true;
      });
      setExpandedModules(initialExpanded);
    }
  }, [course]);
  if (!course)
  return (
    <VaultLayout>
        <div>Course not found</div>
      </VaultLayout>);

  const activeLesson = course.modules.
  flatMap((m) => m.lessons).
  find((l) => l.id === activeLessonId);
  const toggleModule = (idx: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };
  return (
    <VaultLayout>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* LEFT SIDEBAR - MODULE LIST */}
        <div className="w-full lg:w-80 flex-shrink-0 bg-bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-4 border-b border-border bg-bg-elevated">
            <Link
              to="/vault"
              className="flex items-center gap-2 text-xs text-text-secondary hover:text-gold mb-3">

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
            {course.modules.map((module, idx) =>
            <div key={idx} className="border-b border-border last:border-0">
                <button
                onClick={() => toggleModule(idx)}
                className="w-full flex items-center justify-between p-4 bg-bg-card hover:bg-bg-elevated transition-colors text-left">

                  <span className="font-bold text-sm text-text-primary">
                    {module.title}
                  </span>
                  {expandedModules[idx] ?
                <ChevronUp size={16} /> :

                <ChevronDown size={16} />
                }
                </button>

                {expandedModules[idx] &&
              <div className="bg-bg">
                    {module.lessons.map((lesson) =>
                <button
                  key={lesson.id}
                  onClick={() => setActiveLessonId(lesson.id)}
                  className={`w-full flex items-start gap-3 p-3 pl-4 text-left transition-colors border-l-2 ${activeLessonId === lesson.id ? 'bg-bg-elevated border-gold' : 'border-transparent hover:bg-bg-elevated'}`}>

                        <div className="mt-0.5 flex-shrink-0">
                          {lesson.completed ?
                    <CheckCircle
                      size={16}
                      className="text-[#00A86B]"
                      fill="currentColor"
                      stroke="black" /> :


                    <Circle size={16} className="text-text-muted" />
                    }
                        </div>
                        <span
                    className={`text-sm ${activeLessonId === lesson.id ? 'text-gold font-medium' : 'text-text-secondary'}`}>

                          {lesson.title}
                        </span>
                      </button>
                )}
                  </div>
              }
              </div>
            )}
          </div>
        </div>

        {/* RIGHT CONTENT - LESSON PLAYER */}
        <div className="flex-grow w-full">
          {activeLesson &&
          <div className="bg-bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle
                  size={24}
                  className="text-[#00A86B]"
                  fill="currentColor"
                  stroke="black" />

                  <h1 className="text-2xl md:text-3xl font-serif font-bold text-text-primary">
                    {activeLesson.title}
                  </h1>
                </div>
                <button className="text-text-muted hover:text-gold transition-colors">
                  <Edit2 size={18} />
                </button>
              </div>

              {/* Video Player Placeholder */}
              <div className="w-full aspect-video bg-black rounded-lg border border-border mb-8 relative group overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <button className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20">
                  <Play
                  size={32}
                  className="text-white ml-1"
                  fill="currentColor" />

                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-mono text-gold mb-1">
                    Powered by Loom
                  </div>
                  <div className="text-xs font-mono opacity-70">
                    16 min • 1.2x
                  </div>
                </div>
              </div>

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
                    className="flex items-center gap-3 p-3 bg-bg-elevated border border-border rounded hover:border-gold transition-colors group">

                      <div className="w-8 h-8 bg-[#FF4433]/10 rounded flex items-center justify-center text-[#FF4433]">
                        <FileText size={16} />
                      </div>
                      <span className="text-sm text-text-primary group-hover:text-gold transition-colors">
                        Narrative - Directional Bias.pdf
                      </span>
                    </a>
                    <a
                    href="#"
                    className="flex items-center gap-3 p-3 bg-bg-elevated border border-border rounded hover:border-gold transition-colors group">

                      <div className="w-8 h-8 bg-text-secondary/10 rounded flex items-center justify-center text-text-secondary">
                        <FileText size={16} />
                      </div>
                      <span className="text-sm text-text-primary group-hover:text-gold transition-colors">
                        Directional Bias Mental Model.pdf
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </VaultLayout>);

}