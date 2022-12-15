import { RequestType } from '../../constant/RequestType';

/**
 * リプライ一覧取得リクエストクラス
 */
export class GetRepliesRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** チャンネル ID */
  public channelId: string;

  /** メッセージの ts */
  public parentTs: string;

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
   * @param parentTs メッセージの ts
   * @param accessToken アクセストークン
   * @param maxCount 最大取得件数
   * @param oldestTs 現在取得している最古のts
   */
  constructor(
    requestType: RequestType,
    channelId: string,
    parentTs: string,
    accessToken: string,
    maxCount: string,
    oldestTs?: string
  ) {
    this.requestType = requestType;
    this.channelId = channelId;
    this.parentTs = parentTs;
    this.accessToken = accessToken;
    this.maxCount = maxCount;
    this.oldestTs = oldestTs;
  }
}
