import { RequestType } from '../../constant/RequestType';

/**
 * メンバーリスト情報取得リクエストクラス
 */
export class GetMembersRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** アクセストークン */
  public accessToken: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param accessToken アクセストークン
   */
  public constructor(
    requestType: RequestType,
    accessToken: string,
    email: string
  ) {
    this.requestType = requestType;
    this.accessToken = accessToken;
  }
}
