import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';

/**
 * アクセストークンリフレッシュレスポンスクラス
 */
export class RefreshResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** JWT のアクセストークン */
  public accessToken: string;

  /** JWT アクセストークン有効期限 */
  public accessTokenExpires: number;

  /**
   *  コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param accessToken JWT のアクセストークン
   * @param accessTokenExpires JWT アクセストークン有効期限
   */
  public constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    accessToken: string,
    accessTokenExpires: number
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.accessToken = accessToken;
    this.accessTokenExpires = accessTokenExpires;
  }
}
