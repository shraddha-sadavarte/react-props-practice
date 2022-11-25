import "./Student.css";

function Student(props){
    return(
        <div className="stud-container">
            <h1>{props.studentName}</h1>
            <b className="mbNo"> 📞Mobile Number: </b>
            <span className="info">{props.mobileNumber}</span><br></br><br></br>
            <b className="study"> 📚What are you learning: </b>
            <span className="info">{props.standared}</span>
        </div>
    )
}

export default Student