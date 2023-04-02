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

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param channelId チャンネル ID
   * @param parentTs メッセージの ts
   * @param accessToken アクセストークン
   */
  public constructor(
    requestType: RequestType,
    channelId: string,
    parentTs: string,
    accessToken: string
  ) {
    this.requestType = requestType;
    this.channelId = channelId;
    this.parentTs = parentTs;
    this.accessToken = accessToken;
  }
}
