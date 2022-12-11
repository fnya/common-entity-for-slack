import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';

/**
 * ユーザー初期化(with Token)レスポンスクラス
 */
export class InitializeUserWithTokenResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** ユーザーID */
  public userId: string;

  /** JWT のアクセストークン */
  public accessToken: string;

  /** JWT のリフレッシュトークン */
  public refreshToken: string;

  /** JWT のリフレッシュトークン有効期限 */
  public refreshTokenExpires: number;

  /**
   *  コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param userId ユーザーID
   * @param accessToken JWT のアクセストークン
   * @param refreshToken JWT のリフレッシュトークン
   * @param refreshTokenExpires JWT のリフレッシュトークン有効期限
   */
  constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    userId: string,
    accessToken: string,
    refreshToken: string,
    refreshTokenExpires: number
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.userId = userId;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.refreshTokenExpires = refreshTokenExpires;
  }
}
