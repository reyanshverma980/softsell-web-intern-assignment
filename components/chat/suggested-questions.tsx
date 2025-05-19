"use client";

import { Button } from "@/components/ui/button";

interface SuggestedQuestionsProps {
  onQuestionClick: (question: string) => void;
}

export default function SuggestedQuestions({
  onQuestionClick,
}: SuggestedQuestionsProps) {
  const questions = [
    "How do I sell my software license?",
    "What types of licenses do you buy?",
    "How much is my license worth?",
    "How long does the process take?",
  ];

  return (
    <div className="space-y-2 w-full">
      {questions.map((question, index) => (
        <Button
          key={index}
          variant="outline"
          className="w-full justify-start text-left h-auto py-2 px-3"
          onClick={() => onQuestionClick(question)}
        >
          {question}
        </Button>
      ))}
    </div>
  );
}
