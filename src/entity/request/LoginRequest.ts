import { RequestType } from '../../constant/RequestType';

/**
 * ログインリクエストクラス
 */
export class Login {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** メールアドレス */
  public email: string;

  /** パスワード */
  public password: string;

  /**
   * ログインリクエストのコンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param email メールアドレス
   * @param password パスワード
   */
  public constructor(
    requestType: RequestType,
    email: string,
    password: string
  ) {
    this.requestType = requestType;
    this.email = email;
    this.password = password;
  }
}
