import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';

/**
 * 共通レスポンス
 */
export class CommonResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /**
   * CommonResposne のコンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   */
  public constructor(httpStatus: HttpStatus, httpStatusCode: HttpStatusCode) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
  }
}
