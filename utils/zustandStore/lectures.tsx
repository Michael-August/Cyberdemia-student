import { create } from "zustand";

interface CourseState {
  courseData: any;
  resourceData: any;
  selectedLecture: any;
  selectedContent: any;
  setCourseData: (data: any) => void;
  setResourceData: (data: any) => void;
  setLecture: (lecture: any) => void;
  setContent: (content: any) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  courseData: null,
  resourceData: null,
  selectedLecture: null,
  selectedContent: null,
  setCourseData: (data) => set({ courseData: data }),
  setResourceData: (data) => set({ resourceData: data }),
  setLecture: (lecture) => set({ selectedLecture: lecture }),
  setContent: (content) => set({ selectedContent: content }),
}));
