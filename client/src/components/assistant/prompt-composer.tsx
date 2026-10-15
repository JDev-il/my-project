import { SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function PromptComposer() {
  return (
    // TODO(UI): LOGIC agent — supply the send action, then convert this group into a form and wire submit here
    <div role="group" aria-label="Message composer" className="flex items-end gap-2">
      <Textarea
        rows={2}
        placeholder="Ask about your investments…"
        aria-label="Ask about your investments"
        className="min-h-16 flex-1 resize-none"
      />
      <Button type="button" size="icon-lg" aria-label="Send message">
        <SendHorizontal aria-hidden="true" />
      </Button>
    </div>
  );
}
