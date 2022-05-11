export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phone: string;
  tags: string[];
  officeId: number;
  location?: string;
}
