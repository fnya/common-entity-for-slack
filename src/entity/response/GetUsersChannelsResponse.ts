import { ChannelEntity } from './entity/ChannelEntity';
import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';

/**
 * ユーザーに権限のあるチャンネル一覧取得レスポンスクラス
 */
export class GetUsersChannelsResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** チャンネル一覧 (public と権限のある private channel) */
  public channels: ChannelEntity[];

  /**
   *  コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param channels チャンネル一覧
   */
  constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    channels: ChannelEntity[]
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.channels = channels;
  }
}
