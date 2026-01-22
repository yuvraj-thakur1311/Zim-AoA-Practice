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
import type { Patient } from "../types/patientType";
import { PatientTable } from "./PatientTable";
import { PatientDetails } from "./PatientDetails";

export default function Patients() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(Boolean(location.state?.openOnboarding));

  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [details, setDetails] = useState(false);

  useEffect(() => {
    if (location.state?.openOnboarding) {
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  function handleCreatePatient(patient: Patient) {
    setPatients((prev) => [...prev, patient]);
    setOpen(false);
  }

  function handleViewPatient(patient: Patient) {
    setSelectedPatient(patient);
    setDetails(true);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold  text-red-700">Patients</h2>

        <Button
          className="bg-red-800 text-white hover:bg-red-900"
          onClick={() => setOpen(true)}
        >
          Add Patient
        </Button>
      </div>

      <PatientTable patients={patients} onView={handleViewPatient} />

      <Sheet open={details} onOpenChange={setDetails}>
        <SheetContent
          side="right"
          className="w-full md:max-w-1/3 p-0 flex flex-col h-dvh"
        >
          <SheetHeader className="px-6 py-4 border-b">
            <SheetTitle className=" text-red-700 font-bold">
              {" "}
              Patient Details
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {selectedPatient && <PatientDetails patient={selectedPatient} />}
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full md:max-w-1/3 p-0 flex flex-col h-dvh"
        >
          <SheetHeader className="px-6 py-4 border-b">
            <SheetTitle className=" text-red-700">Add Patient</SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <PatientOnboardingForm onCreate={handleCreatePatient} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
