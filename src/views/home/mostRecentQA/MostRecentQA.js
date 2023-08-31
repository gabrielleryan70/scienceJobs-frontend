import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useGetEmployersQuery,

} from '../../../store/apiSlice'
import { setStatus, setId, setStatusId } from '../../../store/postsSlice'
const MostRecentQA = () => {
  console.log('MostRecentQA')
  const dispatch = useDispatch()
  const {
    data: datas,
    isLoading,
    isSuccess,
  } = useGetEmployersQuery()
  const showDetail = (id) => {
    dispatch(setStatusId({ id, status: 'showDetail' }))
    window.scrollTo(0, 0)
  }
  let content

  if (isLoading) {
    content = <p>Loading...</p>
  } else if (isSuccess) {
  
    content = datas.map(({ id, company_name }, index) => (
      <div
        className={`font-bold  ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
        onClick={() => showDetail(id)}
        key={id}
      >
        {company_name}
      </div>
    ));
  }
  return <div className='overflow-y'>{content}</div>
}

export default MostRecentQA
