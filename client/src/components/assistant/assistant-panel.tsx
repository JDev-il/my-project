import { Bot } from "lucide-react";

import { EmptyState } from "@/components/shared/empty-state";
import { SectionCard } from "@/components/shared/section-card";
import { Button } from "@/components/ui/button";

import { PromptComposer } from "./prompt-composer";

const SUGGESTED_PROMPTS = [
  "Why did my portfolio move today?",
  "Which holdings carry the most risk?",
  "What should I watch this week?",
] as const;

export function AssistantPanel({ className }: { className?: string }) {
  return (
    <SectionCard
      id="assistant"
      className={className}
      title="AI assistant"
      description="Ask questions and get reasoning about your investments"
      contentClassName="flex flex-1 flex-col gap-4"
    >
      {/* TODO(UI): LOGIC agent — supply conversation messages, then render the thread here in place of the empty state */}
      <div className="flex min-h-64 flex-1 flex-col items-center justify-center rounded-lg border border-dashed bg-muted/30">
        <EmptyState
          icon={Bot}
          title="Ask about your portfolio"
          description="Get explanations for price moves, risk exposure, and what the news means for your holdings."
        >
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <Button key={prompt} type="button" variant="outline" size="sm">
                {prompt}
              </Button>
            ))}
          </div>
        </EmptyState>
      </div>
      <PromptComposer />
    </SectionCard>
  );
}
