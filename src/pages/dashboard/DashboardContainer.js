import DashboardComponent from "./DashboardComponent";
import { connect } from "react-redux";
import { fetchUserList } from "../../reducers/usersReducer"; 

const mapStateToProps = ({ usersReducer }) => {
    console.log("DSfsdfdsf", usersReducer)
	return {
		userList: usersReducer.contents,
		isLoading: usersReducer.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        fetchUsers: () => dispatch(fetchUserList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);