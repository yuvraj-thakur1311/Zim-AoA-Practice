// import { format } from "date-fns";
// import type { Patient } from "../types/patientType";

// type Props = {
//   patient: Patient;
// };

// export function PatientDetails({ patient }: Props) {
//   return (
//     <div className="space-y-6">
//       <Detail label="Name" value={`${patient.firstName} ${patient.lastName}`} />
//       <Detail label="Email" value={patient.email} />
//       <Detail label="Contact" value={patient.contact} />
//       <Detail label="Gender" value={patient.gender} />
//       <Detail
//         label="Date of Birth"
//         value={patient.dob ? format(patient.dob, "dd MMM yyyy") : "-"}
//       />

//       <div className="border-t pt-4 space-y-2">
//         <Detail label="Street" value={patient.street} />
//         <Detail label="City" value={patient.city} />
//         <Detail label="State" value={patient.state} />
//         <Detail label="Country" value={patient.country} />
//         <Detail label="Zip Code" value={patient.zipCode} />
//       </div>
//     </div>
//   );
// }

// function Detail({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex justify-between text-sm">
//       <span className="text-muted-foreground">{label}</span>
//       <span className="font-medium">{value}</span>
//     </div>
//   );
// }


import { format } from "date-fns";
import type { Patient } from "../types/patientType";
import { User, Mail, Phone, Calendar, MapPin, Home } from "lucide-react";

type Props = {
  patient: Patient;
};

export function PatientDetails({ patient }: Props) {
  return (
    <div className="space-y-6">
      {/* Personal Information Section */}
      <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-red-100 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-red-800" />
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailCard
            icon={<User className="w-4 h-4 text-red-700" />}
            label="Full Name"
            value={`${patient.firstName} ${patient.lastName}`}
          />
          <DetailCard
            icon={<Mail className="w-4 h-4 text-red-700" />}
            label="Email"
            value={patient.email}
          />
          <DetailCard
            icon={<Phone className="w-4 h-4 text-red-700" />}
            label="Contact"
            value={patient.contact}
          />
          <DetailCard
            icon={<User className="w-4 h-4 text-red-700" />}
            label="Gender"
            value={patient.gender}
          />
          <DetailCard
            icon={<Calendar className="w-4 h-4 text-red-700" />}
            label="Date of Birth"
            value={patient.dob ? format(patient.dob, "MMM dd yyyy") : "-"}
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-800" />
          Address Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailCard
            icon={<Home className="w-4 h-4 text-gray-600" />}
            label="Street"
            value={patient.street}
          />
          <DetailCard
            icon={<MapPin className="w-4 h-4 text-gray-600" />}
            label="City"
            value={patient.city}
          />
          <DetailCard
            icon={<MapPin className="w-4 h-4 text-gray-600" />}
            label="State"
            value={patient.state}
          />
          <DetailCard
            icon={<MapPin className="w-4 h-4 text-gray-600" />}
            label="Country"
            value={patient.country}
          />
          <DetailCard
            icon={<MapPin className="w-4 h-4 text-gray-600" />}
            label="Zip Code"
            value={patient.zipCode}
          />
        </div>
      </div>
    </div>
  );
}

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            {label}
          </p>
          <p className="text-sm font-semibold text-gray-900 break-words">
            {value || "-"}
          </p>
        </div>
      </div>
    </div>
  );
}