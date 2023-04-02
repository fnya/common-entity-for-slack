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

  /** チャンネル ID */
  public channelId: string;

  /** チャンネル名 */
  public channelName: string;

  /** リプライ一覧 */
  public replies: ReplyEntity[];

  /**
   * コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param channelId チャンネル ID
   * @param channelName チャンネル名
   * @param replies リプライ一覧
   */
  public constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    channelId: string,
    channelName: string,
    replies: ReplyEntity[]
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.channelId = channelId;
    this.channelName = channelName;
    this.replies = replies;
  }
}
