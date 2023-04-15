import { HttpStatus } from '../../constant/HttpStatus';
import { HttpStatusCode } from '../../constant/HttpStatusCode';
import { MemberEntity } from './entity/MemberEntity';

/**
 * メンバー一覧取得レスポンスクラス
 */
export class GetMembersResponse {
  /** HTTP ステータス */
  public httpStatus: HttpStatus;

  /** HTTP ステータスコード */
  public httpStatusCode: HttpStatusCode;

  /** メンバー一覧 */
  public members: MemberEntity[];

  /**
   *  コンストラクタ
   *
   * @param httpStatus HTTP ステータス
   * @param httpStatusCode HTTP ステータスコード
   * @param members メンバー一覧
   */
  public constructor(
    httpStatus: HttpStatus,
    httpStatusCode: HttpStatusCode,
    members: MemberEntity[]
  ) {
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.members = members;
  }
}
