import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import PatientOnboardingForm from "./PatientOnboardingForm";
import { Button } from "../components/ui/button";

export default function Patients() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(
    Boolean(location.state?.openOnboarding)
  );

  useEffect(() => {
    if (location.state?.openOnboarding) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Patients</h2>

        <Button
          className="bg-red-800 text-white hover:bg-red-900"
          onClick={() => setOpen(true)}
        >
          Add Patient
        </Button>
      </div>

      <div className="rounded-md border p-4 text-muted-foreground">
        Patients list here
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full md:max-w-1/3 max-w-none">
          <SheetHeader>
            <SheetTitle>Patient Onboarding</SheetTitle>
          </SheetHeader>

          <div className="mt-4">
            <PatientOnboardingForm />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
