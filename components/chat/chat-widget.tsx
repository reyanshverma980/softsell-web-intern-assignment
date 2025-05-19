"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatDialog from "./chat-dialog";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  // Delay showing the widget for a better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
  };

  return (
    <AnimatePresence>
      {showWidget && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 flex flex-col items-end"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <AnimatePresence mode="wait">
            {isOpen && !isMinimized ? (
              <ChatDialog
                onClose={() => setIsOpen(false)}
                onMinimize={minimizeChat}
                key="chat-dialog"
              />
            ) : isMinimized ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mb-4 flex items-center bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg cursor-pointer"
                onClick={() => setIsMinimized(false)}
                key="minimized-chat"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Chat with SoftSell AI</span>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <Button
            size="lg"
            className="rounded-full h-14 w-14 shadow-lg"
            onClick={toggleChat}
            aria-label={isOpen ? "Close chat" : "Open chat"}
          >
            {isOpen && !isMinimized ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
