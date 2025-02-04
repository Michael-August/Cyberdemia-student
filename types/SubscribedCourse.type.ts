import { Course } from './Course.type';

export interface Subscription {
  subscription: string;
  student: {
    firstName: string;
    lastName: string;
    fullName: string;
    id: string;
  };
  course: Course;
  currentSection: string | null;
  completedSections: string[];
  currentLecture: string | null;
  progressPercentage: number;
  completedLectures: string[];
  lastAccessed: string;
  createdAt: string;
  id: string;
}
