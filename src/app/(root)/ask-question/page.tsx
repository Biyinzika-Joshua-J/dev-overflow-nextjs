import Question from '@/components/forms/Question'
import React, { useEffect } from 'react'
import { createQuestion } from '@/lib/actions/question.action'

const AskQuestion = () => {

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question/>
      </div>
    </div>
  )
}

export default AskQuestion