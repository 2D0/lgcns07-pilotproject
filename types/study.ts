// 스터디 · 신청 데이터 모양 (가안 — 스웨거가 나오면 맞춰서 고치기)

export type StudyCategory =
  "FRONTEND" | "BACKEND" | "ALGORITHM" | "CS" | "INTERVIEW";

export type StudyStatus = "OPEN" | "CLOSED";

export type StudyMode = "ONLINE" | "OFFLINE" | "BOTH";

export type Study = {
  studyId: number;
  title: string;
  category: StudyCategory;
  techTags: string[];
  status: StudyStatus;
  currentMembers: number;
  maxMembers: number;
  deadline: string; // "2026-11-20"
  mode: StudyMode;
  content: string;
  authorNickname: string;
  createdAt: string;
};

// 목록 화면에서 쓰는 한 줄 (본문은 빼고)
export type StudySummary = Omit<Study, "content" | "mode">;

export type StudyListData = {
  studies: StudySummary[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type ApplicationStatus = "PENDING" | "APPROVED" | "REJECTED";

export type Application = {
  applicationId: number;
  studyId: number;
  applicantNickname: string;
  message: string;
  status: ApplicationStatus;
  createdAt: string;
};
