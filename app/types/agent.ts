export interface Agent {
  id: string;
  firstName: string;
  lastName: string;
  titlePrimary?: string;
  shortDescriptor?: string;
  headshotUrl?: string;
  accentImageUrl?: string;
  achievementImageUrl?: string;
  expertiseImageUrl?: string;
  isActive?: boolean;
  displayOrder?: number;
}
