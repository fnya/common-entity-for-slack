import { HttpStatus } from '../../constant/HttpStatus';

/**
 * viewer-api-for-slack を初期化したレスポンス
 */
export class InitializedResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** JWT のアクセストークン */
  public accessToken: string;

  /** JWT のリフレッシュトークン */
  public refreshToken: string;

  /**
   * InitializedResponse のコンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param accessToken JWT のアクセストークン
   * @param refreshToken JWT のリフレッシュトークン
   */
  public constructor(
    httpStatus: HttpStatus,
    accessToken: string,
    refreshToken: string
  ) {
    this.httpStatus = httpStatus;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
