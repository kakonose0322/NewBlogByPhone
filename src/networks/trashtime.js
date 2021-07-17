import {request} from './request2'

export function getTrashList(params) {
  return request('/varticle',{
    url: '/trashtime/bySAE',
    method: 'get',
    params: params
  })
}

export function getCommentList(params) {
  return request('/varticle',{
    url: '/trashtime/comment',
    method: 'get',
    params: params
  })
}

export function getAnimationList() {
  return request('/varticle',{
    url: '/article/animations',
    method: 'get'
  })
}