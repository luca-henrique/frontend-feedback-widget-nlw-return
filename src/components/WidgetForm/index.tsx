import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/other.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: { source: bugImageUrl, alt: "Imagem de um inseto" },
  },
  IDEIA: {
    title: "Idea",
    image: { source: ideaImageUrl, alt: "Imagem de um uma lamapada" },
  },
  OTHER: {
    title: "Outro",
    image: { source: otherImageUrl, alt: "Imagem de um nuvem de pensamento" },
  },
};

export type FeedbackType = keyof typeof feedBackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestatFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rems)] md:w-auto;;;;;ls  ">
      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequest={handleRestatFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="www.rocketseat.com">Rocketseat</a>
      </footer>
    </div>
  );
}
