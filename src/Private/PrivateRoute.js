import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children, ...rest}) => {
    let history = useHistory();
    let location = useLocation();
    const {user} = useAuth();
    return (
        <Route 
        {...rest} 
        render = {(props) =>
            user.email ?(
                children
            ) : (
                <Redirect
                    to = {{
                        pathname:"/login",
                        sate:{form:location},
                    }}
                />
            )
        }
        />
            
    );
};

export default PrivateRoute;