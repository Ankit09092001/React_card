function card(props){
    return(
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={props.car} alt="Avatar"/>
          </div>
          <div className="flip-card-back">
            <h1>{props.name}</h1>
            <h3>It is an luxury car</h3>
          </div>
        </div>
      </div>
    );
}
export default card;