import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';
import { MesssageEntity } from './entity/MesssageEntity';

/**
 * メッセージ一覧レスポンス
 */
export class GetMessagesResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** チャンネル ID */
  public channelId: string;

  /** チャンネル名 */
  public channelName: string;

  /** メッセージ一覧 */
  public messages: MesssageEntity[];

  /** メッセージが残っているか(true:あり/false:なし) */
  public hasMore: boolean;

  /**
   * コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param channelId チャンネル ID
   * @param channelName チャンネル名
   * @param messages メッセージ一覧
   * @param hasMore メッセージが残っているか(true:あり/false:なし
   */
  constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    channelId: string,
    channelName: string,
    messages: MesssageEntity[],
    hasMore: boolean
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.channelId = channelId;
    this.channelName = channelName;
    this.messages = messages;
    this.hasMore = hasMore;
  }
}
