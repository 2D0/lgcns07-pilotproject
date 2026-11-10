// 강사님 Spring API 주소 모음 (서버 주소 앞부분은 .env의 NEXT_PUBLIC_API_URL)
// ⚠ study · application 쪽은 아직 "가안"이에요. 스웨거가 나오면 이 파일만 고치면 됩니다.
export const apiPaths = {
  auth: {
    login: "/api/v1/auth/login",
    signup: "/api/v1/auth/register",
    me: "/api/v1/auth/me",
  },
  study: {
    list: "/api/v1/studies",
    detail: (studyId: number | string) => `/api/v1/studies/${studyId}`,
    create: "/api/v1/studies",
    update: (studyId: number | string) => `/api/v1/studies/${studyId}`,
    remove: (studyId: number | string) => `/api/v1/studies/${studyId}`,
    mine: "/api/v1/studies/me",
  },
  application: {
    apply: (studyId: number | string) =>
      `/api/v1/studies/${studyId}/applications`,
    cancel: (studyId: number | string) =>
      `/api/v1/studies/${studyId}/applications/me`,
    listByStudy: (studyId: number | string) =>
      `/api/v1/studies/${studyId}/applications`,
    decide: (applicationId: number | string) =>
      `/api/v1/applications/${applicationId}`,
  },
} as const;
