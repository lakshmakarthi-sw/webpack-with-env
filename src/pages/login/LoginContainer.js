import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { fetchContent } from '../../reducers/loginReducer';

const mapStateToProps = ({ loginReducer }) => {
	return {
		loginObj: loginReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (data) => dispatch(fetchContent(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);