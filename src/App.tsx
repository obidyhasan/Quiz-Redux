import QuizCard from "./pages/Quiz/QuizCard";
import QuizSummary from "./pages/Quiz/QuizSummary";
import { useAppSelector } from "./redux/hook";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {quizComplete ? <QuizSummary /> : <QuizCard />}
    </div>
  );
}

export default App;
