import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeebackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackRestartRequest,
}: FeebackContentStepProps) => {
  const feedbackTypeInfo = feedBackTypes[feedbackType];

  return (
    <>
      <header className="flex flex-row  w-full">
        <button className=" text-zinc-400 hover:text-zinc-100" type="button">
          <ArrowLeft
            height="bold"
            className="w-4 h-4"
            onClick={onFeedbackRestartRequest}
          />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
};
