import { RequestType } from '../../constant/RequestType';

/**
 * パスワードリセットリクエストクラス(with token)
 */
export class ResetPasswordRequestWithToken {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** メールアドレス */
  public email: string;

  /** パスワード */
  public password: string;

  /** パスワード(再入力) */
  public rePassword: string;

  /** トークン */
  public token: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param email メールアドレス
   * @param password パスワード
   * @param rePassword パスワード(再入力)
   * @param token トークン
   */
  public constructor(
    requestType: RequestType,
    email: string,
    password: string,
    rePassword: string,
    token: string
  ) {
    this.requestType = requestType;
    this.email = email;
    this.password = password;
    this.rePassword = rePassword;
    this.token = token;
  }
}
