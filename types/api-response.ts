// 강사님 Spring API가 돌려주는 공통 모양 (11/9 수업)
// 성공이든 실패든 이 모양으로 온다 → 화면에는 message를 그대로 보여 주기
export type ApiResponse<T> = {
  success: boolean;
  code: number;
  message: string;
  data: T;
};
