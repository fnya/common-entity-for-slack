import { RequestType } from '../../constant/RequestType';

/**
 * ログインリクエストクラス
 */
export class Login {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** ユーザー ID */
  public userId: string;

  /** パスワード */
  public password: string;

  /**
   * ログインリクエストのコンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param userId  ユーザー ID
   * @param password パスワード
   */
  public constructor(
    requestType: RequestType,
    userId: string,
    password: string
  ) {
    this.requestType = requestType;
    this.userId = userId;
    this.password = password;
  }
}
