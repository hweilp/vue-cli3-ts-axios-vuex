// method: 'get',
// url: '/v1/reconcenter/common/enums/name2titlemaps/UserStatusEnum'

import Http from "@/utils/request";

export const userStatusEnum = () => {
  //
  return Http.request({
    url: '/v1/reconcenter/common/enums/name2titlemaps/UserStatusEnum',
    method: 'get'
  })
}