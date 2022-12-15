import { RequestType } from '../../constant/RequestType';

/**
 * パスワード変更リクエストクラス
 */
export class ChangePasswordRequest {
  /** リクエストタイプ */
  public requestType: RequestType;

  /** ユーザー ID */
  public userId: string;

  /** 旧パスワード */
  public oldPassword: string;

  /** 新パスワード */
  public newPassword: string;

  /** 新パスワード(再入力) */
  public newRePassword: string;

  /** アクセストークン */
  public accessToken: string;

  /**
   * コンストラクタ
   *
   * @param requestType リクエストタイプ
   * @param userId ユーザー ID
   * @param oldPassword 旧パスワード
   * @param newPassword 新パスワード
   * @param newRePassword 新パスワード(再入力)
   * @param accessToken アクセストークン
   */
  constructor(
    requestType: RequestType,
    userId: string,
    oldPassword: string,
    newPassword: string,
    newRePassword: string,
    accessToken: string
  ) {
    this.requestType = requestType;
    this.userId = userId;
    this.oldPassword = oldPassword;
    this.newPassword = newPassword;
    this.newRePassword = newRePassword;
    this.accessToken = accessToken;
  }
}
