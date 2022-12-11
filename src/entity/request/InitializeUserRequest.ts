import { RequestType } from '../../constant/RequestType';

/**
 * ユーザー初期化リクエストクラス
 */
export class InitializeUserRequest {
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
