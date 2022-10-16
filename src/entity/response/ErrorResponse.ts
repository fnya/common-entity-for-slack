import { HttpStatus } from '../../constant/HttpStatus';

/**
 * エラーレスポンス
 */
export class ErrorResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** メッセージ */
  public message: string;

  /**
   * ErrorResponse のコンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param message メッセージ
   */
  public constructor(httpStatus: HttpStatus, message: string) {
    this.httpStatus = httpStatus;
    this.message = message;
  }
}
