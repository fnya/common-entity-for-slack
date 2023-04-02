import { RequestType } from '../../constant/RequestType';

/**
 * トリガー削除リクエストクラス
 */
export class RemoveTriggersRequest {
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
  public constructor(requestType: RequestType, accessToken: string) {
    this.requestType = requestType;
    this.accessToken = accessToken;
  }
}
