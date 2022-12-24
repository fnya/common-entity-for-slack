import { RequestType } from '../../constant/RequestType';

/**
 * パスワードリセットリクエストクラス
 */
export class ResetPasswordRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** メールアドレス */
  public email: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param email メールアドレス
   */
  constructor(requestType: RequestType, email: string) {
    this.requestType = requestType;
    this.email = email;
  }
}
