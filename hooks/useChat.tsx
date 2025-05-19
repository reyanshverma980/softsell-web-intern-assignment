import { Message } from "@/types/chat";
import { useCallback, useState } from "react";

// Mock responses for common questions
const mockResponses: Record<string, string> = {
  "how do i sell my software license?":
    "Selling your software license with SoftSell is easy! Just follow these 3 steps: 1) Upload your license details through our secure portal, 2) Receive a valuation from our team within 24 hours, 3) Accept the offer and get paid within 48 hours. Would you like to start the process now?",
  "what types of licenses do you buy?":
    "We purchase a wide range of software licenses including enterprise software (Microsoft, Adobe, Oracle, SAP), cloud subscriptions, desktop applications, server licenses, and more. We specialize in business and enterprise software rather than consumer applications. What type of license are you looking to sell?",
  "how much is my license worth?":
    "The value of your license depends on several factors including the software type, remaining subscription time, demand in the market, and original purchase price. Our AI-powered valuation system analyzes current market conditions to offer you the best possible price. For a specific valuation, please fill out our contact form with your license details.",
  "how long does the process take?":
    "Our process is designed to be quick and efficient. After you submit your license details, you'll receive a valuation within 24 hours. Once you accept the offer, payment is processed within 48 hours. The entire process typically takes 3-5 business days from start to finish.",
};

// Fallback response for questions we don't have a specific answer for
const fallbackResponses =
  "Please connect with our support team for further assistance.";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMockResponse = (ques: string) => {
    const question = ques.toLowerCase().trim();

    // Check for exact matches first
    if (mockResponses[question]) {
      return mockResponses[question];
    }

    // Check for partial matches
    for (const [key, response] of Object.entries(mockResponses)) {
      if (question.includes(key) || key.includes(question)) {
        return response;
      }
    }

    // Return fallback response if no match
    return fallbackResponses;
  };

  const sendMessage = useCallback(async (content: string) => {
    // Add user message
    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);

    // Set loading state
    setIsLoading(true);

    setTimeout(() => {
      // Get response based on user's question
      const responseContent = getMockResponse(content);

      // Add assistant message
      const assistantMessage: Message = {
        role: "assistant",
        content: responseContent,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  }, []);

  return { messages, sendMessage, isLoading };
}
