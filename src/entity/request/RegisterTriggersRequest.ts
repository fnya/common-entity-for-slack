import { RequestType } from '../../constant/RequestType';

/**
 * トリガー登録リクエストクラス
 */
export class RegisterTriggersRequest {
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
