import { RequestType } from '../../constant/RequestType';

/**
 * ログインリクエストクラス
 */
export class LoginRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** ユーザー ID */
  public userId: string;

  /** パスワード */
  public password: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param userId  ユーザー ID
   * @param password パスワード
   */
  constructor(requestType: RequestType, userId: string, password: string) {
    this.requestType = requestType;
    this.userId = userId;
    this.password = password;
  }
}
