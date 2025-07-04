import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hook";

const getPerformance = (percentage: number) => {
  if (percentage >= 90) {
    return { rating: "Excellent" };
  } else if (percentage >= 60) {
    return { rating: "Good" };
  } else if (percentage >= 30) {
    return { rating: "Average" };
  } else {
    return { rating: "Poor" };
  }
};

const QuizSummary = () => {
  const { questions, userAnswer } = useAppSelector((state) => state.quiz);

  // Calculate correct and incorrect answer
  const correctAnswerCount = questions.reduce((count, question, index) => {
    return question.correctAnswer === userAnswer[index] ? count + 1 : count;
  }, 0);

  const incorrectAnswerCount = questions.length - correctAnswerCount;

  const correctPercentage = parseFloat(
    ((correctAnswerCount / questions.length) * 100).toFixed(2)
  );

  const { rating } = getPerformance(correctPercentage);

  return (
    <div className="w-full max-w-md m-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Quiz Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <h3 className="font-medium text-base mb-2">
            You got {correctAnswerCount} out of {questions.length} correct!
          </h3>
          {/* Progress Bar */}
          <div>
            <Progress value={correctPercentage} />
          </div>
          <div className="flex justify-between gap-3">
            <span>{correctPercentage}%</span>
            <span>Performance: {rating}</span>
          </div>
          {/* Statistics */}
          <div>
            <p className="text-red-500">
              Incorrect Answer: {incorrectAnswerCount}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
