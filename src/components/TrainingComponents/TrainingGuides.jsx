// import React from 'react';

// const TrainingGuides = () => {
//     return (
//         <div>
//             <div className='min-h-full lg:mx-40  mb-5 lg:mb-10 mt-20'>


//                 <div id="videoSection" class="container trainingTutorial" style="max-width: 1100px;">
//                     <div class="row">
//                         <div class="col-md-9 col-sm-7 vdoDisplay">
//                             <div id="video_wrap" class="video_wrap">
//                                 <div id="video_loader" class="loding_block" style="display: none;">
//                                     <div class="newLoader">
//                                         <svg width="84px" height="84px" viewBox="0 0 84 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//                                             <g id="Hardware-Connect" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//                                                 <g id="Hardware-Test-Loading-2" transform="translate(-467.000000, -361.000000)" fill-rule="nonzero">
//                                                     <g id="Group-4" transform="translate(467.000000, 361.000000)">
//                                                         <path d="M42,0.95 C19.328711,0.95 0.95,19.328711 0.95,42 C0.95,64.671289 19.328711,83.05 42,83.05 C64.671289,83.05 83.05,64.671289 83.05,42 C83.05,19.328711 64.671289,0.95 42,0.95 Z M42,9.05 C60.1977825,9.05 74.95,23.8022175 74.95,42 C74.95,60.1977825 60.1977825,74.95 42,74.95 C23.8022175,74.95 9.05,60.1977825 9.05,42 C9.05,23.8022175 23.8022175,9.05 42,9.05 Z" id="Oval" fill="#ECF1F8"></path>
//                                                         <path d="M42,83.05 C64.671289,83.05 83.05,64.671289 83.05,42 C83.05,39.7632468 81.2367532,37.95 79,37.95 C76.7632468,37.95 74.95,39.7632468 74.95,42 C74.95,60.1977825 60.1977825,74.95 42,74.95 C39.7632468,74.95 37.95,76.7632468 37.95,79 C37.95,81.2367532 39.7632468,83.05 42,83.05 Z" id="Oval" class="bColorFill" fill="#F22240"></path>
//                                                     </g>
//                                                 </g>
//                                             </g>
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <div class="playback-animation" id="playback-animation">
//                                     <svg class="playback-icons">
//                                         <use class="hidden" href="#play-icon"></use>
//                                         <use href="#pause"></use>
//                                     </svg>
//                                 </div>
//                                 <video playsinline="" crossorigin="anonymous" id="video" preload="auto" class="myVideo cueNone" poster="https://myinterviewpractice.com/images/video_poster/introduction.png" src="blob:https://myinterviewpractice.com/4c060283-cbfb-49a8-9e40-0062ee5b58ac">
//                                     <track id="sourceTrack" label="English" kind="captions" srclang="en-us" default="" />
//                                 </video>
//                                 <div class="vdoOverlay"></div>
//                                 <div id="vdoCtrlOvrly" style="cursor: inherit;"></div>
//                                 <div class="sheetWrap hide">
//                                     <p>Sign up for My Interview Practice Premium to keep watching.</p>
//                                     <a class="tSignup" href="https://myinterviewpractice.com/register-one/">Sign up</a>
//                                 </div>
//                                 <div id="video-controls" class="control">
//                                     <div class="btmControl">
//                                         <div class="progress-bar">
//                                             <div id="progress" class="progress">
//                                                 <span class="bufferBar" style="width: 19.1968%;"></span>
//                                                 <span class="timeBar"></span>
//                                             </div>
//                                         </div>
//                                         <div class="cntrlPart">
//                                             <div class="cntrlPartTp">
//                                                 <div class="btnPlay btn" title="Play/Pause video"></div>
//                                                 <div class="sound sound2 btn" title="Mute/Unmute sound"></div>
//                                                 <div class="vol">
//                                                     <div class="volume" title="Set volume">
//                                                         <span class="volumeBar" style="width: 100%;"></span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="cntrlPartBtm">
//                                                 <div class="current">00:00</div> / <div class="duration">02:46</div>
//                                             </div>
//                                         </div>
//                                         <div class="btnCC btn cc-button cc_off" data-title="Closed Captions" id="cc-button">
//                                             <img src="https://myinterviewpractice.com/images/closed-caption-subtitles.svg" />
//                                         </div>
//                                         <div class="btnFS btn fullScreen" title="Switch to full screen">
//                                             <img src="https://myinterviewpractice.com/images/fullscreen_icon.svg" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-md-3 col-sm-5 tr_tutorial">
//                             <a href="javascript:void(0);" data-video-url="https://images.myinterviewpractice.com/video/introduction/introduction.m3u8" data-video-poster="https://myinterviewpractice.com/images/video_poster/introduction.png" data-video-cc="https://myinterviewpractice.com/uploads/track/introduction.vtt" data-video-id="1" class="trVdoBtn videoChange">
//                                 <span class="vidCtrl play playCtrl_1"></span>Introduction
//                             </a>
//                             <a href="javascript:void(0);" data-video-url="https://images.myinterviewpractice.com/video/company_research_preview/company_research_preview.m3u8" data-video-poster="https://myinterviewpractice.com/images/video_poster/company_research.png" data-video-cc="" data-video-id="2" class="trVdoBtn videoChange">
//                                 <span class="vidCtrl play playCtrl_2"></span>Class Sample
//                             </a>
//                             <h3>Lesson Plan</h3>
//                             <div class="vdoItemWrap hmeVdoWrap s-overlay mCustomScrollbar _mCS_1 mCS-autoHide"><div id="mCSB_1" class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabindex="0"><div id="mCSB_1_container" class="mCSB_container" style="position:relative; top:0; left:0;" dir="ltr">
//                                 <div class="vdoItem">
//                                     <a class="listToggle collapsed" data-toggle="collapse" href="#list_item1" role="button" aria-expanded="false" aria-controls="list_item">
//                                         <span class="num">1.</span> Introduction </a>
//                                     <div class="collapse" id="list_item1">
//                                         <div class="listDetailWrap">
//                                             <div class="vdoTxt">
//                                                 <p>Learn what employers look for in a candidate and how you can use this program to land your dream job.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="vdoItem">
//                                     <a class="listToggle collapsed" data-toggle="collapse" href="#list_item2" role="button" aria-expanded="false" aria-controls="list_item">
//                                         <span class="num">2.</span> Company Research </a>
//                                     <div class="collapse" id="list_item2">
//                                         <div class="listDetailWrap">
//                                             <div class="vdoTxt">
//                                                 <p>Learn what to research about a company, and how to use that information to gain an edge over the competition.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="vdoItem">
//                                     <a class="listToggle collapsed" data-toggle="collapse" href="#list_item3" role="button" aria-expanded="false" aria-controls="list_item">
//                                         <span class="num">3.</span> Strengths &amp; Weaknesses </a>
//                                     <div class="collapse" id="list_item3">
//                                         <div class="listDetailWrap">
//                                             <div class="vdoTxt">
//                                                 <p>Determine how to assess your strengths and weaknesses and use them to your advantage during an interview.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="vdoItem">
//                                     <a class="listToggle collapsed" data-toggle="collapse" href="#list_item4" role="button" aria-expanded="false" aria-controls="list_item">
//                                         <span class="num">4.</span> Behavioral &amp; Situational Questions </a>
//                                     <div class="collapse" id="list_item4">
//                                         <div class="listDetailWrap">
//                                             <div class="vdoTxt">
//                                                 <p>Understand why interviewers ask Behavioral and Situational questions, then learn how to use the S.T.A.R. technique to blow them out of the water!</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="vdoItem">
//                                     <a class="listToggle collapsed" data-toggle="collapse" href="#list_item5" role="button" aria-expanded="false" aria-controls="list_item">
//                                         <span class="num">5.</span> Technical Questions </a>
//                                     <div class="collapse" id="list_item5">
//                                         <div class="listDetailWrap">
//                                             <div class="vdoTxt">
//                                                 <p>Technical questions assess whether you have the right skills for the job. Learn how to put your best foot forward.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="vdoItem">
//                                     <a class="listToggle collapsed" data-toggle="collapse" href="#list_item6" role="button" aria-expanded="false" aria-controls="list_item">
//                                         <span class="num">6.</span> Questions to Ask </a>
//                                     <div class="collapse" id="list_item6">
//                                         <div class="listDetailWrap">
//                                             <div class="vdoTxt">
//                                                 <p>The questions you ask are almost as important as the answers you give during an interview. Determine which questions to ask and why they’re important.</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="vdoItem">
//                                     <a class="listToggle collapsed" data-toggle="collapse" href="#list_item7" role="button" aria-expanded="false" aria-controls="list_item">
//                                         <span class="num">7.</span> Interview Checklist </a>
//                                     <div class="collapse" id="list_item7">
//                                         <div class="listDetailWrap">
//                                             <div class="vdoTxt">
//                                                 <p>Knowing what to do before and after an interview is crucial. Use this checklist to get ready for the big day!</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div><div id="mCSB_1_scrollbar_vertical" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style="display: block;"><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; height: 201px; top: 0px; display: block; max-height: 260px;" oncontextmenu="return false;"><div class="mCSB_dragger_bar" style="line-height: 30px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default TrainingGuides;