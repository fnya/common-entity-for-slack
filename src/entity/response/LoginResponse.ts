import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';

/**
 * ログインレスポンスクラス
 */
export class LoginResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** JWT のアクセストークン */
  public accessToken: string;

  /** JWT のリフレッシュトークン */
  public refreshToken: string;

  /**
   *  ログインレスポンスクラスのコンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param accessToken JWT のアクセストークン
   * @param refreshToken JWT のリフレッシュトークン
   */
  public constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    accessToken: string,
    refreshToken: string
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
