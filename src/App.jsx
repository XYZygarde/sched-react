import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import courses from './arraySet/Subjects.jsx';
import Footer from './footer.jsx';

const DateObj = new Date();
const liveDay = DateObj.getDay();
const todaySub = "Today's Subject";

function App() {

  let [contentList, setContentList] = useState([]);

  useEffect(() => {
    switch (liveDay) {
      case 2:
        setContentList([
          <Content subj={courses[2].subName}
                   announce = {todaySub}
                   time = {courses[2].subTime}
                   code = {courses[2].subCode}
                   dateDay = {courses[2].subRoom}
                   bgColor = {courses[2].subColor}
                   key={2}
          />,
          <Content subj={courses[3].subName}
                   announce = {todaySub}
                   time = {courses[3].subTime}
                   code = {courses[3].subCode}
                   dateDay = {courses[3].subRoom}
                   bgColor = {courses[3].subColor}
                   key={3}
          />
        
        ]);
        break;
      case 3:
        setContentList([
          <Content subj={courses[5].subName}
                   announce = {todaySub}
                   time = {courses[5].subTime}
                   code = {courses[5].subCode}
                   dateDay = {courses[5].subRoom}
                   bgColor = {courses[5].subColor}
                   key={5}
          />,
          <Content subj={courses[6].subName}
                   announce = {todaySub}
                   time = {courses[6].subTime}
                   code = {courses[6].subCode}
                   dateDay = {courses[6].subRoom}
                   bgColor = {courses[6].subColor}
                   key={6}
          />

        ]);
        break;
      case 4:
        setContentList([
          <Content subj={courses[4].subName}
                   announce = {todaySub}
                   time = {courses[4].subTime}
                   code = {courses[4].subCode}
                   dateDay = {courses[4].subRoom}
                   bgColor = {courses[4].subColor}
                   key={4}
           />
        ]);
        break;
      case 5:
        setContentList([
          <Content subj={courses[0].subName}
                   announce = {todaySub}
                   time = {courses[0].subTime}
                   code = {courses[0].subCode}
                   dateDay = {courses[0].subRoom}
                   bgColor = {courses[0].subColor}
                   key={0}
          />
        ]);
        break;
      case 6:
        setContentList([
          <Content subj={courses[1].subName}
                   announce = {todaySub}
                   time = {courses[1].subTime}
                   code = {courses[1].subCode}
                   dateDay = {courses[1].subRoom}
                   bgColor = {courses[1].subColor}
                   key={1}
          />
        ]);
        break;
      default:
        setContentList([]);
        break;
    }
  }, [liveDay]); 

  return (
    <>
      <Header />
      <>
        <div className="courseCon">
          {contentList.map(content => content)}
        </div>
      </>
      <Footer />
    </>
  );
}

export default App;