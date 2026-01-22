import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
// import { format } from "date-fns";
import type { Patient } from "../types/patientType";
import { MoreVertical } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

type Props = {
  patients: Patient[];
  onView: (patient: Patient) => void;
};

export function PatientTable({ patients, onView }: Props) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            {/* <TableHead>Gender</TableHead>
            <TableHead>DOB</TableHead> */}
            {/* <TableHead>City</TableHead> */}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {patients.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center text-muted-foreground"
              >
                No patients added yet
              </TableCell>
            </TableRow>
          )}

          {patients.map((p) => (
            <TableRow key={p.id}>
              <TableCell className="font-medium">
                {p.firstName} {p.lastName}
              </TableCell>
              <TableCell>{p.email}</TableCell>
              <TableCell>{p.contact}</TableCell>
              {/* <TableCell className="capitalize">{p.gender}</TableCell>
              <TableCell>
                {p.dob ? format(p.dob, "dd MMM yyyy") : "-"}
              </TableCell>
              <TableCell>{p.city}</TableCell> */}
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onView(p)} className="cursor-pointer">
                      View Details
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
