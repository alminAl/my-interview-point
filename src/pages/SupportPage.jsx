import React from 'react'
import FindAnswer from '../components/Support/FindAnswer'
import SupportIntro from '../components/Support/SupportIntro'
import SupportQuestions from '../components/Support/SupportQuestions'
import Video from '../components/Support/Video'


const SupportPage = () => {
  return (
    <div>
     <SupportIntro/>
     <Video/>
     <SupportQuestions/>
     <FindAnswer/>
    </div>
  )
}

export default SupportPage