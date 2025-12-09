"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Bot, X, Send, Sparkles } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatId, setChatId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat`,
        {
          message: userMessage,
          chatId,
        }
      );

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: res.data.reply },
      ]);

      setChatId(res.data.chatId);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error connecting to AI." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Robot Icon */}
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 cursor-pointer bg-gray-900 text-cyan-400 p-4 z-50 rounded-2xl shadow-2xl hover:shadow-cyan-500/30 hover:bg-gray-800 transition-all duration-300 group animate-float"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative">
            <Bot
              size={28}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute -top-1 -right-1">
              <div className="h-3 w-3 bg-cyan-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-1 bg-cyan-500/50 rounded-full blur-sm"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed z-50 bottom-6 right-6 w-80 md:w-96 bg-gray-900 shadow-2xl rounded-2xl border border-cyan-800/50 flex flex-col animate-slideIn">
          {/* Header */}
          <div className="px-4 py-4 bg-gradient-to-r from-gray-900 to-cyan-900/30 text-cyan-300 flex justify-between items-center rounded-t-2xl border-b border-cyan-800/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <div>
                <span className="font-bold text-white">Cyber AI Assistant</span>
                <div className="text-xs text-cyan-400/70 flex items-center gap-1">
                  <Sparkles size={10} />
                  <span>Online • Ready to help</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-cyan-300 hover:text-white hover:bg-cyan-900/50 p-1.5 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="p-4 h-80 overflow-y-auto space-y-4 bg-gradient-to-b from-gray-900 to-gray-950 scrollbar-thin scrollbar-thumb-cyan-800 scrollbar-track-gray-900">
            {/* Messages */}
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-48 text-center px-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-900/30 to-gray-900 rounded-2xl flex items-center justify-center mb-4 border border-cyan-800/30">
                  <Bot size={28} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-medium mb-2">
                  Welcome to My Portfolio Assistant
                </h3>
                <p className="text-sm text-cyan-300/60 mb-4">
                  Ask me about my skills, projects, or experience!
                </p>

                {/* Quick Questions */}
                <div className="grid grid-cols-2 gap-2 w-full">
                  <button
                    onClick={() => setInput("What are your skills?")}
                    className="text-xs bg-gray-800/50 hover:bg-cyan-900/30 text-cyan-300 border border-cyan-800/30 rounded-lg px-3 py-2 transition-colors"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => setInput("Tell me about your projects")}
                    className="text-xs bg-gray-800/50 hover:bg-cyan-900/30 text-cyan-300 border border-cyan-800/30 rounded-lg px-3 py-2 transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => setInput("What's your experience?")}
                    className="text-xs bg-gray-800/50 hover:bg-cyan-900/30 text-cyan-300 border border-cyan-800/30 rounded-lg px-3 py-2 transition-colors"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => setInput("How can I contact you?")}
                    className="text-xs bg-gray-800/50 hover:bg-cyan-900/30 text-cyan-300 border border-cyan-800/30 rounded-lg px-3 py-2 transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } animate-messageIn`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm backdrop-blur-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white shadow-lg shadow-cyan-500/20"
                      : "bg-gray-800/80 text-cyan-100 border border-cyan-900/30"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 bg-gradient-to-br from-cyan-700 to-cyan-900 rounded-lg flex items-center justify-center">
                        <Bot size={12} className="text-cyan-300" />
                      </div>
                    )}
                    <span className="text-xs font-semibold opacity-80">
                      {msg.role === "user" ? "You" : "Cyber AI"}
                    </span>
                  </div>
                  <div className="leading-relaxed">{msg.content}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-messageIn">
                <div className="px-4 py-3 rounded-2xl bg-gray-800/80 text-cyan-100 border border-cyan-900/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-700 to-cyan-900 rounded-lg flex items-center justify-center">
                      <Bot size={12} className="text-cyan-300" />
                    </div>
                    <span className="text-xs font-semibold opacity-80">
                      Cyber AI
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-4 flex gap-2 border-t border-cyan-900/30 bg-gray-900/95 backdrop-blur-sm rounded-b-2xl">
            <input
              type="text"
              className="flex-1 border border-cyan-800/50 bg-gray-800/80 text-white placeholder-cyan-300/50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none transition-all"
              placeholder="Message Cyber AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white px-5 py-3 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={sendMessage}
              disabled={!input.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style>{`
        .animate-slideIn {
          animation: slideIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-messageIn {
          animation: messageIn 0.3s ease-out;
        }

        @keyframes messageIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 0.5);
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.7);
        }
      `}</style>
    </>
  );
}
