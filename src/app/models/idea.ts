export interface Idea {
  id: number;
  name: string;
  organization: string;
  location: string;
  website?: string;
  optimalParticipantsAmount?: string;
  categories?: string[];
  description: string;
  contactPerson: string;
  hasCaptain: boolean;
  isUserParticipating: boolean;
  isUserCaptain: boolean;
}
