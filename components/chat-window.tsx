import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Rnd, RndResizeCallback, RndDragCallback } from 'react-rnd';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatWindowProps {
  id: string;
  onClose: (id: string) => void;
  initialMessages: { role: "user" | "ai"; content: string }[];
  messageCount: number;
  maxMessages: number;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  id,
  onClose,
  initialMessages,
  messageCount,
  maxMessages,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>(initialMessages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const cardHeaderRef = useRef<HTMLDivElement>(null);
  const chatInputAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("ChatWindow initialMessages:", initialMessages);
  }, [initialMessages]);

  const [windowSize, setWindowSize] = useState({
    width: Math.min(window.innerWidth * 0.8, 800),
    height: Math.min(window.innerHeight * 0.9, 700),
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const defaultX = (window.innerWidth - windowSize.width) / 2;
  const defaultY = (window.innerHeight - windowSize.height) / 2;

  const handleResize: RndResizeCallback = (e, direction, ref, delta, position) => {
    setWindowSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
  };

  const handleDrag: RndDragCallback = (e, data) => {
    // We don't need to do anything specific on drag for size, but can if needed later
  };

  const chatContentHeight = useMemo(() => {
    if (cardHeaderRef.current && chatInputAreaRef.current) {
      const headerHeight = cardHeaderRef.current.offsetHeight;
      const inputHeight = chatInputAreaRef.current.offsetHeight;
      return windowSize.height - headerHeight - inputHeight - 32; // 32 for padding (p-4 top/bottom)
    }
    return 0;
  }, [windowSize.height]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    const newUserMessage = { role: "user" as const, content: searchQuery };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setSearchQuery("");

    try {
      const res = await fetch("/api/chat/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: searchQuery }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to get response from API.");
      }

      const data = await res.json();
      const aiResponse = { role: "ai" as const, content: data.text };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (err: any) {
      console.error("Frontend API call error:", err);
      setError(err.message);
      setMessages((prevMessages) => [...prevMessages, { role: "ai" as const, content: `Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Rnd
      default={{
        x: defaultX,
        y: defaultY,
        width: windowSize.width,
        height: windowSize.height,
      }}
      minWidth={300}
      minHeight={400}
      bounds="window"
      className="border border-border/50 rounded-lg shadow-2xl bg-card/95 backdrop-blur-md flex flex-col custom-chat-window"
      cancel=".chat-input-area"
      onResizeStop={handleResize}
      onDragStop={handleDrag}
    >
      <Card className="flex flex-col flex-1 border-none shadow-none bg-transparent">
        <CardHeader ref={cardHeaderRef} className="flex flex-row items-center justify-between p-4 border-b border-border/50 bg-card/80 rounded-t-lg cursor-move">
          <div>
            <CardTitle className="text-lg font-medium"><span className="font-semibold text-[var(--green-accent)]"></span> Chat</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">Window ID: {id}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onClose(id)} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent style={{ height: chatContentHeight > 0 ? chatContentHeight : 'auto' }} className="overflow-y-auto p-4 space-y-4 text-sm custom-scrollbar">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg shadow-sm border ${msg.role === "user"
                ? "bg-card text-foreground self-end rounded-br-none ml-auto max-w-[80%] border-border"
                : "bg-secondary/50 text-secondary-foreground self-start rounded-tl-none mr-auto max-w-[80%] border-secondary/60"
              }`}
            >
              <p className="font-medium text-xs mb-1">
                {msg.role === "user" ? "You" : "s.ai"}
              </p>
              <div className="text-sm font-light leading-relaxed prose prose-sm dark:prose-invert break-words">
                <ReactMarkdown components={{
                  a: ({ node, ...props }) => <a {...props} className="text-[var(--green-accent)] hover:underline" />
                }}>{msg.content}</ReactMarkdown>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>
        <div ref={chatInputAreaRef} className="chat-input-area p-4 border-t border-border/50 bg-card/80 rounded-b-lg">
          <form onSubmit={handleSubmit} className={`relative w-full ${loading || messageCount >= maxMessages ? 'opacity-50 pointer-events-none' : ''}`}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={messageCount >= maxMessages ? `You have reached your message limit (${maxMessages} messages).` : "Ask anything..."}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-sm bg-background focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={loading || messageCount >= maxMessages}
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <span className="text-xs text-muted-foreground pr-1">Gemini-2.5-flash</span>
              <Button type="submit" disabled={loading || messageCount >= maxMessages} size="icon" className="rounded-full h-7 w-7 flex items-center justify-center bg-[var(--green-accent)] text-[var(--green-accent-foreground)] hover:bg-[var(--green-accent)]/90 focus:outline-none focus:ring-1 focus:ring-[var(--green-accent)] focus:ring-offset-1 focus:ring-offset-background">
                {loading ? <span className="animate-spin text-xs">🌀</span> : <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </form>
          {error && <p className="text-red-500 text-xs mt-2">Error: {error}</p>}
          {messageCount < maxMessages && (
            <p className="text-muted-foreground text-xs text-center mt-2">Messages remaining: {maxMessages - messageCount}</p>
          )}
        </div>
      </Card>
    </Rnd>
  );
}; 