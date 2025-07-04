import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  nextQuestion,
  previousQuestion,
  setAnswer,
  setQuizComplete,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const QuizCard = () => {
  const dispatch = useAppDispatch();
  const { questions, currentQuestionIndex, userAnswer, quizComplete } =
    useAppSelector((state) => state.quiz);

  const currentQuestions = questions[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];

  function handleNextButton() {
    if (currentQuestionIndex === questions.length - 1 && !quizComplete) {
      return dispatch(setQuizComplete());
    }

    if (currentAnswer) {
      dispatch(nextQuestion());
    }
  }

  return (
    <div className="w-full max-w-md m-4">
      <Card>
        <CardHeader>
          <CardTitle>{currentQuestions.question}</CardTitle>
          <CardDescription>{`Question: ${currentQuestionIndex + 1} / ${
            questions.length
          }`}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {currentQuestions.options.map((question, index) => (
            <Button
              onClick={() =>
                dispatch(
                  setAnswer({
                    questionIndex: currentQuestionIndex,
                    answer: question,
                  })
                )
              }
              key={index}
              variant={currentAnswer === question ? "default" : "outline"}
              className="w-full"
            >
              {question}
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <div className="flex justify-between w-full">
            <Button
              disabled={currentQuestionIndex === 0}
              onClick={() => dispatch(previousQuestion())}
            >
              Previous
            </Button>
            <Button
              disabled={currentAnswer === null}
              onClick={handleNextButton}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizCard;
