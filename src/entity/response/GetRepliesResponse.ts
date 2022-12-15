import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';
import { ReplyEntity } from './entity/ReplyEntity';

/**
 * リプライ一覧レスポンス
 */
export class GetRepliesResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** リプライ一覧 */
  public replies: ReplyEntity[];

  /** リプライが残っているか(true:あり/false:なし) */
  public hasMore: boolean;

  /**
   * コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param replies リプライ一覧
   * @param hasMore リプライが残っているか(true:あり/false:なし)
   */
  constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    replies: ReplyEntity[],
    hasMore: boolean
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.replies = replies;
    this.hasMore = hasMore;
  }
}
