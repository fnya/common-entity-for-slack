import { RequestType } from '../../constant/RequestType';

/**
 * ユーザーに権限のあるチャンネル一覧取得リクエストクラス
 */
export class GetUsersChannelsRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** ユーザー ID */
  public userId: string;

  /** アクセストークン */
  public accessToken: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param userId ユーザー ID
   * @param accessToken アクセストークン
   */
  public constructor(
    requestType: RequestType,
    userId: string,
    accessToken: string
  ) {
    this.requestType = requestType;
    this.userId = userId;
    this.accessToken = accessToken;
  }
}
