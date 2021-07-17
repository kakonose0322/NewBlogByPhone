import {request} from './request2'

export function getWebsiteInfo() {
  return request('/varticle',{
    url: '/article/siteMessage',
    method: 'get'
  })
}

export function getTags() {
  return request('/varticle',{
    url: '/article/tags',
    method: 'get'
  })
}

export function getMein() {
  return request('/varticle',{
    url: '/article/mein',
    method: 'get'
  })
}

// 配置首页音乐列表(不配theme，会根据封面配置)
export function getAudioList() {
  return request('/varticle',{
    url: '/article/musics',
    method: 'get'
  })
}