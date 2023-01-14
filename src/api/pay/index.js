import request from '@/utils/request'

export function getBillGather(data) {
  return request({
    url: '/pay/bill/gather',
    method: 'post',
    data
  })
}

export function getBillListAPI(data) {
  return request({
    url: '/pay/bill/list',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
