import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <Button
          className="bg-red-800 text-white hover:bg-red-900"
          onClick={() =>
            navigate("/patients", {
              state: { openOnboarding: true },
            })
          }
        >
          Add Patient
        </Button>
      </div>

      <p className="text-muted-foreground">No data available yet.</p>
    </div>
  );
}
