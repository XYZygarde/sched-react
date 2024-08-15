const Content = (props) => {

    return(
        <>
          <div className="courseCard" style={{background: `${props.bgColor}` }}>
               <h2>{props.announce}</h2>
               <ul>
                <li>{props.subj}</li>
                <li><b>Time:</b>{` ${props.time}`}</li>
                <li><b>Code:</b>{` ${props.code}`}</li>
                <li><b>Room:</b>{` ${props.dateDay}`}</li>
               </ul>
          </div>
        </>
    );

}
export default Content