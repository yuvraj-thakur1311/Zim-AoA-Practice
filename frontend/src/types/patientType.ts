export type Patient = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  contact: string;
  dob: Date | null;
  gender: string;
  street: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
};
