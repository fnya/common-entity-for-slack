import { RequestType } from '../../constant/RequestType';

/**
 * メッセージ一覧取得リクエストクラス
 */
export class GetMessagesRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** チャンネル ID */
  public channelId: string;

  /** アクセストークン */
  public accessToken: string;

  /** 最大取得件数 */
  public maxCount: string;

  /** 現在取得している最古のts  */
  public oldestTs?: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param channelId チャンネル ID
   * @param accessToken アクセストークン
   * @param maxCount 最大取得件数
   * @param oldestTs 現在取得している最古のts
   */
  public constructor(
    requestType: RequestType,
    channelId: string,
    accessToken: string,
    maxCount: string,
    oldestTs?: string
  ) {
    this.requestType = requestType;
    this.channelId = channelId;
    this.accessToken = accessToken;
    this.maxCount = maxCount;
    this.oldestTs = oldestTs;
  }
}
