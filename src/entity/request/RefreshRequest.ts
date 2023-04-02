import { RequestType } from '../../constant/RequestType';

/**
 * アクセストークンリフレッシュリクエストクラス
 */
export class RefreshRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** ユーザー ID */
  public userId: string;

  /** リフレッシュトークン */
  public refreshToken: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param userId  ユーザー ID
   * @param refreshToken リフレッシュトークン
   */
  public constructor(
    requestType: RequestType,
    userId: string,
    refreshToken: string
  ) {
    this.requestType = requestType;
    this.userId = userId;
    this.refreshToken = refreshToken;
  }
}
