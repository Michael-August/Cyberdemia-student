export interface Course {
  title: string;
  subtitle: string;
  objective: string; // HTML string (ul/li format)
  prerequisite: string; // HTML string (ul/li format)
  numberOfStudents: number;
  averageRating: number;
  totalRatings: number;
  totalLearning: number;
  recommended: boolean;
  courseType: 'paid' | 'free';
  sections: Section[];
  courseInstructor: Instructor;
  status: 'pending' | 'approved' | 'rejected';
  request: boolean;
  createdAt: string; // ISO date string
  certificate: Certificate;
  id: string;
}

export interface Section {
  sectionTitle: string;
  id: string;
}

export interface Instructor {
  email: string;
  id: string;
}

export interface Certificate {
  signature: string; // Base64 image string
}
