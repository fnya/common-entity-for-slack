import { RequestType } from '../../constant/RequestType';

/**
 * ユーザー情報変更リクエストクラス
 */
export class ChangeUserInformationRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** アクセストークン */
  public accessToken: string;

  /** ユーザー ID */
  public userId: string;

  /** 権限のあるプライベートチャンネルのリスト */
  public channels?: string;

  /** 管理者フラグ(true:管理者/false:一般ユーザー) */
  public isAdmin?: string;

  /** 初期化フラグ(falseのみ,指定されたらユーザーを初期化する) */
  public initialized?: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param accessToken アクセストークン
   * @param userId ユーザー ID
   * @param channels 権限のあるプライベートチャンネルのリスト
   * @param isAdmin 管理者フラグ(true:管理者/false:一般ユーザー)
   * @param initialized 初期化フラグ(falseのみ,指定されたらユーザーを初期化する)
   */
  constructor(
    requestType: RequestType,
    accessToken: string,
    userId: string,
    channels?: string,
    isAdmin?: string,
    initialized?: string
  ) {
    this.requestType = requestType;
    this.accessToken = accessToken;
    this.userId = userId;
    this.channels = channels;
    this.isAdmin = isAdmin;
    this.initialized = initialized;
  }
}
