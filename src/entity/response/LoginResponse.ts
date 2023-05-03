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

  /** ユーザー ID */
  public userId: string;

  /** JWT のアクセストークン */
  public accessToken: string;

  /** JWT アクセストークン有効期限 */
  public accessTokenExpires: number;

  /** JWT のリフレッシュトークン */
  public refreshToken: string;

  /** JWT のリフレッシュトークン有効期限 */
  public refreshTokenExpires: number;

  /**
   *  コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param userId ユーザー ID
   * @param accessToken JWT のアクセストークン
   * @param accessTokenExpires JWT アクセストークン有効期限
   * @param refreshToken JWT のリフレッシュトークン
   * @param refreshTokenExpires JWT のリフレッシュトークン有効期限
   */
  public constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    userId: string,
    accessToken: string,
    accessTokenExpires: number,
    refreshToken: string,
    refreshTokenExpires: number
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.userId = userId;
    this.accessToken = accessToken;
    this.accessTokenExpires = accessTokenExpires;
    this.refreshToken = refreshToken;
    this.refreshTokenExpires = refreshTokenExpires;
  }
}
