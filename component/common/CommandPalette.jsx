"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Home,
  User,
  Layers,
  FolderGit2,
  Briefcase,
  BookOpen,
  Mail,
  Download,
  Copy,
  Check,
  Github,
  Linkedin,
  Bot,
  ExternalLink,
  Command,
  Sparkles,
  X,
} from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(
    "https://drive.google.com/file/d/1YB6dyTDSrI1PcucDpxJZsw7KNvL2S1m4/view?usp=sharing"
  );
  const [isMac, setIsMac] = useState(false);

  const router = useRouter();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Detect OS for keyboard symbol display
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
    }
  }, []);

  // Fetch live resume URL
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/api/resume`);
        if (res.ok) {
          const json = await res.json();
          if (json?.data?.resumeUrl) {
            setResumeUrl(json.data.resumeUrl);
          }
        }
      } catch (e) {
        // fallback to default
      }
    };
    fetchResume();
  }, []);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K / Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle palette on Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Static list of commands
  const allItems = useMemo(
    () => [
      // Navigation
      {
        id: "nav-home",
        title: "Go to Home",
        subtitle: "Hero banner & introduction",
        category: "Navigation",
        icon: <Home size={18} className="text-cyan-400" />,
        action: () => router.push("/"),
      },
      {
        id: "nav-about",
        title: "About Me",
        subtitle: "Biography, background & story",
        category: "Navigation",
        icon: <User size={18} className="text-cyan-400" />,
        action: () => router.push("/about"),
      },
      {
        id: "nav-skills",
        title: "Technical Stack & Skills",
        subtitle: "Core expertise, React, Node, Next.js",
        category: "Navigation",
        icon: <Layers size={18} className="text-cyan-400" />,
        action: () => router.push("/#about"),
      },
      {
        id: "nav-projects",
        title: "Featured Projects",
        subtitle: "Browse web apps & full-stack software",
        category: "Navigation",
        icon: <FolderGit2 size={18} className="text-cyan-400" />,
        action: () => router.push("/projects"),
      },
      {
        id: "nav-experience",
        title: "Career & Education Timeline",
        subtitle: "Work experience and credentials",
        category: "Navigation",
        icon: <Briefcase size={18} className="text-cyan-400" />,
        action: () => router.push("/#experience"),
      },
      {
        id: "nav-blog",
        title: "Tech Articles & Blog",
        subtitle: "Read technical writings & AI tutorials",
        category: "Navigation",
        icon: <BookOpen size={18} className="text-cyan-400" />,
        action: () => router.push("/blog"),
      },
      {
        id: "nav-contact",
        title: "Contact & Inquiries",
        subtitle: "Send a message or hire me",
        category: "Navigation",
        icon: <Mail size={18} className="text-cyan-400" />,
        action: () => router.push("/contact"),
      },

      // Actions
      {
        id: "act-resume",
        title: "Download Resume / CV",
        subtitle: "Open updated PDF resume",
        category: "Actions",
        icon: <Download size={18} className="text-blue-400" />,
        action: () => window.open(resumeUrl, "_blank"),
      },
      {
        id: "act-copy-email",
        title: "Copy Email Address",
        subtitle: "robiulislam1711@gmail.com",
        category: "Actions",
        icon: copiedText === "Email" ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} className="text-blue-400" />,
        action: () => handleCopy("robiulislam1711@gmail.com", "Email"),
      },
      {
        id: "act-social-github",
        title: "View GitHub Profile",
        subtitle: "github.com/Robiul1711",
        category: "Social Profiles",
        icon: <Github size={18} className="text-purple-400" />,
        action: () => window.open("https://github.com/Robiul1711", "_blank"),
      },
      {
        id: "act-social-linkedin",
        title: "View LinkedIn Profile",
        subtitle: "linkedin.com/in/robiul-islam-ashiq",
        category: "Social Profiles",
        icon: <Linkedin size={18} className="text-purple-400" />,
        action: () => window.open("https://www.linkedin.com/in/robiul-islam-ashiq", "_blank"),
      },
    ],
    [router, resumeUrl, copiedText]
  );

  // Filter items by search query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems;
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [allItems, query]);

  // Keyboard navigation within list
  const handleListKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  // Group filtered items by category
  const groupedItems = useMemo(() => {
    const groups = {};
    filteredItems.forEach((item, index) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push({ ...item, globalIndex: index });
    });
    return groups;
  }, [filteredItems]);

  return (
    <>
      {/* Floating Shortcut Trigger Pill (Bottom-Left) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 shadow-xl backdrop-blur-xl transition-all hover:scale-105 group cursor-pointer"
        title="Quick Command Menu"
      >
        <Sparkles size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-medium">Quick Menu</span>
        <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-900 border border-slate-700/60 rounded text-slate-300 group-hover:border-cyan-500/40">
          {isMac ? "⌘K" : "Ctrl+K"}
        </kbd>
      </button>

      {/* Modal Backdrop & Palette */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="w-full max-w-xl bg-slate-950/95 border border-slate-800/90 rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden backdrop-blur-2xl animate-in zoom-in-95 duration-150"
            onKeyDown={handleListKeyDown}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800/80 bg-slate-900/40">
              <Search className="text-cyan-400 shrink-0" size={18} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search (e.g. Projects, Skills, Resume)..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 outline-none"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="text-slate-400 hover:text-white p-1 rounded"
                >
                  <X size={16} />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-900 border border-slate-800 rounded text-slate-500">
                  ESC
                </kbd>
              )}
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="max-h-80 sm:max-h-96 overflow-y-auto p-2 space-y-3 custom-scrollbar"
            >
              {filteredItems.length > 0 ? (
                Object.entries(groupedItems).map(([category, items]) => (
                  <div key={category} className="space-y-1">
                    <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {category}
                    </div>
                    {items.map((item) => {
                      const isSelected = selectedIndex === item.globalIndex;
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            item.action();
                            if (item.id !== "act-copy-email") {
                              setIsOpen(false);
                            }
                          }}
                          onMouseEnter={() => setSelectedIndex(item.globalIndex)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                            isSelected
                              ? "bg-cyan-950/40 border border-cyan-500/30 text-white shadow-sm"
                              : "text-slate-300 hover:bg-slate-900/60 border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`p-2 rounded-lg shrink-0 ${
                                isSelected ? "bg-cyan-500/10 text-cyan-300" : "bg-slate-900 text-slate-400"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="truncate">
                              <p className="text-sm font-semibold truncate text-slate-100">
                                {item.title}
                              </p>
                              <p className="text-xs text-slate-400 truncate">{item.subtitle}</p>
                            </div>
                          </div>

                          {isSelected && (
                            <span className="text-[11px] font-mono text-cyan-400 shrink-0 ml-2 hidden sm:inline-block">
                              ↵ Select
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-slate-500">
                  <p className="text-sm font-medium">No matching commands found.</p>
                  <p className="text-xs mt-1 text-slate-600">Try searching for "Projects", "About", or "Resume".</p>
                </div>
              )}
            </div>

            {/* Footer Quick Keys */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-slate-800/80 bg-slate-950/80 text-[11px] text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px]">
                    ↑↓
                  </kbd>{" "}
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[10px]">
                    ↵
                  </kbd>{" "}
                  Open
                </span>
              </div>
              <span className="text-cyan-400/80 font-medium">Robiul Islam Ashiq Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
