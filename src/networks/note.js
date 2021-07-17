import {request} from "./request2";

// 查询日志
export function getNotes(params) {
  console.log('取得参数',params)
  return request('/varticle',{
    url: '/article/bySAE',
    method: 'get',
    params: params
  })
}

// 查询日志
export function getNotesById(id) {
  return request('/varticle',{
    url: '/article/byId',
    method: 'get',
    params: {
      id: id
    }
  })
}

// 点击数增加
export function addPoint(id) {
  return request('/varticle',{
    url: '/article/point/' + id,
    method: 'get'
  })
}

// 根据内容模糊查询
export function getNoteByQuery(query) {
  return request('/varticle',{
    url: '/article/point',
    method: 'get',
    params: {
      query: query
    }
  })
}
