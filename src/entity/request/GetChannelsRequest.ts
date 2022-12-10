import { RequestType } from '../../constant/RequestType';

/**
 * チャンネル一覧取得リクエストクラス
 */
export class GetChannelsRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** 管理者のアクセストークン */
  public accessToken: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param accessToken 管理者のアクセストークン
   */
  constructor(requestType: RequestType, accessToken: string) {
    this.requestType = requestType;
    this.accessToken = accessToken;
  }
}
