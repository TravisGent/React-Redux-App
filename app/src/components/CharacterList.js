import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/actions";

const CharacterList = (props) => {
  useEffect(() => {
    props.fetchMissions();
  }, []);
  return (
    <div>
      {props.isLoading && <p>Loading CharacterList...</p>}
      {props.error && <p>Uh-oh, something happened... {props.error}</p>}
      {props.fetchedData.length > 0 && (
        <div>
          {props.fetchedData.map(data => (
            <div></div>
          ))}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    fetchedData: state.fetchedData,
    error: state.error
  }
}

export default connect(
    mapStateToProps,
    { fetchData }
  )(CharacterList);