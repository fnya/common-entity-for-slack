import { RequestType } from '../../constant/RequestType';

/**
 * ユーザー情報取得リクエストクラス
 */
export class GetUserInformationRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** アクセストークン */
  public accessToken: string;

  /** メールアドレス */
  public email: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param accessToken アクセストークン
   * @param email メールアドレス
   */
  constructor(requestType: RequestType, accessToken: string, email: string) {
    this.requestType = requestType;
    this.accessToken = accessToken;
    this.email = email;
  }
}
