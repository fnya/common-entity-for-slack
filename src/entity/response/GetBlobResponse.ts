import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';

/**
 * Blob 取得レスポンスクラス
 */
export class GetBlobResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** Base64 でエンコードされた Blob */
  public blob: string;

  /**
   *  コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param blob Base64 でエンコードされた Blob
   */
  public constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    blob: string
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.blob = blob;
  }
}
