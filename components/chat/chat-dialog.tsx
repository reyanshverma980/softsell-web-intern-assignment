"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Minimize2, X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from "./chat-message";

import SuggestedQuestions from "./suggested-questions";
import { useChat } from "@/hooks/useChat";

interface ChatDialogProps {
  onClose: () => void;
  onMinimize: (e: React.MouseEvent) => void;
}

export default function ChatDialog({ onClose, onMinimize }: ChatDialogProps) {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, sendMessage, isLoading } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.toLowerCase().trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleQuestionClick = (question: string) => {
    if (!isLoading) {
      sendMessage(question);
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  return (
    <motion.div
      className="mb-4 w-full max-w-[400px] bg-background border rounded-lg shadow-lg overflow-hidden flex flex-col"
      style={{ height: "500px" }}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Chat header */}
      <div className="p-4 border-b bg-primary text-primary-foreground flex items-center justify-between">
        <h3 className="font-semibold">Chat with SoftSell AI</h3>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-primary-foreground/20"
            onClick={onMinimize}
            aria-label="Minimize chat"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-primary-foreground/20"
            onClick={onClose}
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Welcome to SoftSell AI Assistant
            </h3>
            <p className="text-muted-foreground mb-6">
              Ask me anything about selling your software licenses or choose
              from the suggested questions below.
            </p>
            <SuggestedQuestions onQuestionClick={handleQuestionClick} />
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {isLoading && (
              <ChatMessage
                message={{
                  role: "assistant",
                  content: "Thinking...",
                  isLoading: true,
                }}
              />
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Chat input */}
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t flex items-center space-x-2"
      >
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button
          type="submit"
          size="icon"
          disabled={!inputValue.trim() || isLoading}
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </motion.div>
  );
}
