import { RequestType } from '../../constant/RequestType';

/**
 * Blob 取得リクエストクラス
 */
export class GetBlobRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** ユーザー ID */
  public userId: string;

  /** チャンネル ID */
  public channelId: string;

  /** ファイル ID(Slack) */
  public fileId: string;

  /** アクセストークン */
  public accessToken: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param userId ユーザー ID
   * @param channelId チャンネル ID
   * @param fileId ファイル ID(Slack)
   * @param accessToken アクセストークン
   */
  public constructor(
    requestType: RequestType,
    userId: string,
    channelId: string,
    fileId: string,
    accessToken: string
  ) {
    this.requestType = requestType;
    this.userId = userId;
    this.channelId = channelId;
    this.fileId = fileId;
    this.accessToken = accessToken;
  }
}
