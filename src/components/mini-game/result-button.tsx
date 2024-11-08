import { Button } from "../ui/button";

const ResultButton: React.FC<{
  onPressed?: () => void;
}> = ({ onPressed }) => {
  return (
    <div className="flex justify-center">
      <Button variant="outline" className="mb-4" onClick={onPressed}>
        🎉 We have a <span className="font-bold text-lg">WINNER!</span> Click to
        see the result! 🎉
      </Button>
    </div>
  );
};
export default ResultButton;
