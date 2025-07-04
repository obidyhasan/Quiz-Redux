import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const QuizCard = () => {
  return (
    <div className="w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Previous</Button>
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizCard;
