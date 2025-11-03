"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Folder,
  FileCode,
  Server,
  Database,
  Settings,
  Terminal,
  Eye,
  ExternalLink,
  Play,
  Share,
  Zap,
  Star,
  GitBranch,
} from "lucide-react";

const codeLines = [
  {
    line: 1,
    content: "import React, { useState, useEffect } from 'react'",
    delay: 0,
  },
  { line: 2, content: "import { motion } from 'framer-motion'", delay: 1 },
  {
    line: 3,
    content: "import { ArrowRight, Monitor } from 'lucide-react'",
    delay: 1.5,
  },
  { line: 4, content: "", delay: 2 },
  { line: 5, content: "interface DashboardProps {", delay: 2.5 },
  { line: 6, content: "  userId: string", delay: 3 },
  { line: 7, content: "  theme?: 'light' | 'dark'", delay: 3.5 },
  { line: 8, content: "}", delay: 4 },
  { line: 9, content: "", delay: 4.5 },
  {
    line: 10,
    content: "export const Dashboard: React.FC<DashboardProps> = ({ userId,",
    delay: 5,
  },
  { line: 11, content: "  theme = 'dark' }) => {", delay: 5.5 },
  {
    line: 12,
    content: "  const [metrics, setMetrics] = useState<MetricsData>(null)",
    delay: 6,
  },
  {
    line: 13,
    content: "  const [isLoading, setIsLoading] = useState(true)",
    delay: 6.5,
  },
  { line: 14, content: "", delay: 7 },
  { line: 15, content: "  useEffect(() => {", delay: 7.5 },
  { line: 16, content: "    fetchUserMetrics(userId)", delay: 8 },
  { line: 17, content: "      .then(data => setMetrics(data))", delay: 8.5 },
  {
    line: 18,
    content: "      .catch(error => console.error(error))",
    delay: 9,
  },
  {
    line: 19,
    content: "      .finally(() => setIsLoading(false))",
    delay: 9.5,
  },
  { line: 20, content: "  }, [userId])", delay: 10 },
  { line: 21, content: "", delay: 10.5 },
  { line: 22, content: "  return (", delay: 11 },
  {
    line: 23,
    content: "    <div className='dashboard-container'>",
    delay: 11.5,
  },
  { line: 24, content: "      <motion.h1", delay: 12 },
  { line: 25, content: "        initial={{ opacity: 0, y: 20 }}", delay: 12.5 },
  { line: 26, content: "        animate={{ opacity: 1, y: 0 }}", delay: 13 },
  { line: 27, content: "        className='text-4xl font-bold'", delay: 13.5 },
  { line: 28, content: "      >", delay: 14 },
  { line: 29, content: "        Welcome back!", delay: 14.5 },
  { line: 30, content: "      </motion.h1>", delay: 15 },
  { line: 31, content: "", delay: 15.5 },
  { line: 32, content: "      {isLoading ? (", delay: 16 },
  {
    line: 33,
    content: "        <div className='loading-spinner'>Loading...</div>",
    delay: 16.5,
  },
  { line: 34, content: "      ) : (", delay: 17 },
  { line: 35, content: "        <MetricsPanel data={metrics} />", delay: 17.5 },
  { line: 36, content: "      )}", delay: 18 },
  { line: 37, content: "    </div>", delay: 18.5 },
  { line: 38, content: "  )", delay: 19 },
  { line: 39, content: "}", delay: 19.5 },
];

export default function CodeEditorSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    codeLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, line.delay * 1000);
    });
  }, []);

  return (
    <section className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="stagger-2 glass-effect relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 blur-in">
          {/* IDE Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              </div>
              <span className="text-sm text-white/50">Rohim Dev IDE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
                <Zap className="h-3 w-3 inline mr-1" />
                Live
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* File Explorer */}
            <aside className="lg:col-span-3 space-y-2">
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-4">
                Project Explorer
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                  <Folder className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">portfolio-app</span>
                </div>
                <div className="flex items-center gap-2 p-2 pl-6 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                  <Folder className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">components</span>
                </div>
                <div className="flex items-center gap-2 p-2 pl-10 bg-blue-500/10 border border-blue-500/20 rounded-lg cursor-pointer">
                  <FileCode className="h-4 w-4 text-orange-400" />
                  <span className="text-sm text-blue-300">Portfolio.tsx</span>
                </div>
                <div className="flex items-center gap-2 p-2 pl-10 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                  <FileCode className="h-4 w-4 text-orange-400" />
                  <span className="text-sm">Projects.tsx</span>
                </div>
                <div className="flex items-center gap-2 p-2 pl-6 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                  <Folder className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">lib</span>
                </div>
                <div className="flex items-center gap-2 p-2 pl-10 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                  <Server className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm">api.ts</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                  <Database className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">database.config</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                  <Settings className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">portfolio.config.json</span>
                </div>
              </div>
            </aside>

            {/* Code Editor */}
            <main className="lg:col-span-6">
              <div className="bg-gray-950/80 border border-white/10 rounded-2xl overflow-hidden">
                {/* Editor Tabs */}
                <div className="flex items-center gap-1 p-2 border-b border-white/10 bg-gray-900/50">
                  <div className="flex gap-2 bg-blue-500/20 border-blue-500/30 border rounded-lg pt-2 pr-4 pb-2 pl-4 items-center">
                    <div className="h-3 w-3 text-blue-400">⚛</div>
                    <span className="text-xs text-blue-300">Portfolio.tsx</span>
                    <button
                      className="h-3 w-3 text-white/40 hover:text-white cursor-pointer"
                      aria-label="Close tab"
                    >
                      ×
                    </button>
                  </div>
                  <button
                    className="p-2 hover:bg-white/5 rounded-lg"
                    aria-label="Add new tab"
                  >
                    <div className="h-4 w-4 text-white/40">+</div>
                  </button>
                </div>

                {/* Code Content */}
                <div className="leading-7 min-h-96 relative text-sm font-mono pt-4 pr-4 pb-4 pl-4">
                  <div className="absolute inset-4 space-y-1">
                    {codeLines.map((line, index) => (
                      <TypingLine
                        key={index}
                        line={line.line}
                        content={line.content}
                        delay={line.delay}
                        isVisible={visibleLines.includes(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold sf-pro-display">
                    Rohim
                  </h3>
                  <p className="text-sm text-white/50">
                    by Rohim Dev • Updated 2 minutes ago
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2"
                    aria-label="Star project"
                  >
                    <Star className="h-3 w-3" />
                    2.3k
                  </button>
                  <button
                    className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2"
                    aria-label="Fork project"
                  >
                    <GitBranch className="h-3 w-3" />
                    Fork
                  </button>
                </div>
              </div>
            </main>

            {/* Terminal & Output */}
            <aside className="lg:col-span-3 space-y-4">
              {/* Live Terminal */}
              <div className="bg-gray-950/80 border border-white/10 rounded-xl">
                <div className="flex items-center justify-between p-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm font-medium">Terminal</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full animate-pulse bg-cyan-400"></div>
                    <span className="text-xs text-cyan-400">Live</span>
                  </div>
                </div>
                <div className="p-3 font-mono text-xs space-y-2 h-48 overflow-y-auto">
                  <div className="text-cyan-400">→ npm run dev</div>
                  <div className="text-white/60">
                    🚀 Starting development server...
                  </div>
                  <div className="text-blue-400">
                    ✓ TypeScript compiler ready
                  </div>
                  <div className="text-blue-400">
                    ✓ Hot module replacement enabled
                  </div>
                  <div className="text-cyan-400">
                    ✓ Server running on https://localhost:3000
                  </div>
                  <div className="text-purple-400">
                    ✓ Portfolio components loaded
                  </div>
                  <div className="text-yellow-400">
                    ⚡ Watching for file changes...
                  </div>
                  <div className="text-white/40">
                    Portfolio.tsx compiled in 847ms
                  </div>
                  <div className="text-cyan-400">→ npm run build</div>
                  <div className="text-cyan-400">
                    ✅ Build completed successfully
                  </div>
                  <div className="text-white/40">Bundle size: 245KB</div>
                  <div className="text-blue-400">
                    → Ready for production deployment
                  </div>
                </div>
              </div>

              {/* Live Preview */}
              <div className="bg-gray-950/80 border border-white/10 rounded-xl">
                <div className="flex items-center justify-between p-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">Live Preview</span>
                  </div>
                  <button
                    className="p-1 hover:bg-white/10 rounded"
                    aria-label="Open live preview in new tab"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
                <div className="p-3 space-y-3">
                  <div className="bg-blue-500/20 rounded-lg pt-3 pr-3 pb-3 pl-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">Performance</span>
                      <span className="text-xs text-cyan-400">98/100</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div
                        className="h-1 rounded-full bg-cyan-400"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Bundle Size</span>
                      <span className="text-cyan-400">245KB ↓12%</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Load Time</span>
                      <span className="text-blue-400">1.2s</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Lighthouse</span>
                      <span className="text-purple-400">A+</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Floating action buttons */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              className="hover:bg-white/20 transition-all bg-white/10 rounded-full pt-3 pr-3 pb-3 pl-3"
              aria-label="Play project"
            >
              <Play className="w-5 h-5" />
            </button>
            <button
              className="hover:bg-white/20 transition-all bg-white/10 rounded-full pt-3 pr-3 pb-3 pl-3"
              aria-label="Share project"
            >
              <Share className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TypingLineProps {
  line: number;
  content: string;
  delay: number;
  isVisible: boolean;
}

function TypingLine({ line, content, delay, isVisible }: TypingLineProps) {
  const getSyntaxHighlightedContent = (text: string) => {
    if (!text) return <span></span>;

    // Use a simpler approach that doesn't split compound identifiers
    const parts = text.split(
      /(import|export|from|const|let|var|function|class|interface|type|enum|return|if|else|for|while|do|switch|case|default|break|continue|try|catch|finally|throw|new|this|super|extends|implements|public|private|protected|static|readonly|abstract|async|await|'[^']*'|"[^"]*"|`[^`]*`|\{[^}]*\}|\[[^\]]*\]|\([^)]*\)|;|,|\.|:|<|>|=|\+|\-|\*|\/|%|!|&|\||\^|~|\?|:|\s+)/
    );

    return parts.map((part, index) => {
      // Skip empty parts
      if (!part) return <span key={index}></span>;

      // Keywords (purple/magenta)
      if (
        part.match(
          /^(import|export|from|const|let|var|function|class|interface|type|enum|return|if|else|for|while|do|switch|case|default|break|continue|try|catch|finally|throw|new|this|super|extends|implements|public|private|protected|static|readonly|abstract|async|await)$/
        )
      ) {
        return (
          <span key={index} className="text-purple-400 font-medium">
            {part}
          </span>
        );
      }

      // String literals (orange/yellow)
      if (part.match(/^['"`].*['"`]$/)) {
        return (
          <span key={index} className="text-orange-400">
            {part}
          </span>
        );
      }

      // Type names and React components (light blue/cyan)
      if (
        part.match(
          /^(React|useState|useEffect|useContext|useReducer|useMemo|useCallback|useRef|useLayoutEffect|useImperativeHandle|useDebugValue|motion|JSX|FC|DashboardProps|MetricsData|ArrowRight|Monitor|string|number|boolean|object|array|Promise|then|catch|finally)$/
        )
      ) {
        return (
          <span key={index} className="text-cyan-400 font-medium">
            {part}
          </span>
        );
      }

      // HTML/JSX tags (light blue/cyan)
      if (
        part.match(
          /^(div|span|button|h1|h2|h3|h4|h5|h6|p|ul|ol|li|a|img|input|textarea|select|option|form|label|table|thead|tbody|tr|td|th|section|article|header|footer|nav|main|aside|figure|figcaption|blockquote|code|pre|strong|em|b|i|u|s|mark|small|sub|sup|del|ins|abbr|address|cite|q|time|data|meter|progress|details|summary|dialog|menu|menuitem|command|keygen|output|ruby|rt|rp|bdi|bdo|wbr)$/
        )
      ) {
        return (
          <span key={index} className="text-cyan-400 font-medium">
            {part}
          </span>
        );
      }

      // Attributes and props (yellow)
      if (
        part.match(
          /^(className|onClick|onChange|onSubmit|onFocus|onBlur|onMouseEnter|onMouseLeave|onKeyDown|onKeyUp|onScroll|onLoad|onError|src|alt|href|target|rel|type|name|id|value|placeholder|disabled|required|optional)$/
        )
      ) {
        return (
          <span key={index} className="text-yellow-300 font-medium">
            {part}
          </span>
        );
      }

      // Boolean and special values (white/light gray)
      if (part.match(/^(true|false|null|undefined|NaN|Infinity)$/)) {
        return (
          <span key={index} className="text-white/80 font-medium">
            {part}
          </span>
        );
      }

      // Operators and punctuation (white/light gray)
      if (part.match(/^[{}()[\].,;:<>=\+\-\*\/%!&|^~?]$/)) {
        return (
          <span key={index} className="text-white/80">
            {part}
          </span>
        );
      }

      // Variable names and identifiers (white/light gray)
      if (part.match(/^(userId|theme|Dashboard|metrics|setMetrics)$/)) {
        return (
          <span key={index} className="text-white/90">
            {part}
          </span>
        );
      }

      // Default text (white/light gray)
      return (
        <span key={index} className="text-white/90">
          {part}
        </span>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -10,
      }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center group"
      {...({} as any)}
    >
      <span className="text-white/30 w-8 text-right mr-4">{line}</span>
      <span className="text-sm font-mono">
        {getSyntaxHighlightedContent(content)}
        {isVisible && content && (
          <motion.span
            className="text-cyan-400 font-bold ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            {...({} as any)}
          >
            |
          </motion.span>
        )}
      </span>
    </motion.div>
  );
}
