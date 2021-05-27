import React, { FC, MouseEvent } from "react";
import { AnswerObject } from "../App";

interface Props {
  question: string;
  answers: string[];
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question:{questionNumber} / {totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers.map((answer) => {
          return (
            <div>
              <button
                value={answer}
                disabled={userAnswer ? true : false}
                onClick={callback}
              >
                <span>{answer}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
