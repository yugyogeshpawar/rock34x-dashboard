import { createContext, useCallback, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { Issuer } from "../../utils/auth";
import axios from "axios";

const STORAGE_KEY = "accessToken";

var ActionType;
(function (ActionType) {
  ActionType["INITIALIZE"] = "INITIALIZE";
  ActionType["SIGN_IN"] = "SIGN_IN";
  ActionType["SIGN_UP"] = "SIGN_UP";
  ActionType["SIGN_OUT"] = "SIGN_OUT";
})(ActionType || (ActionType = {}));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  SIGN_IN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_UP: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  SIGN_OUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  issuer: Issuer.JWT,
  signIn: () => Promise.resolve(),
  signUp: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = globalThis.localStorage.getItem(STORAGE_KEY);

      if (accessToken) {
        const user = await axios.get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [dispatch]);

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const signIn = useCallback(
    async (email, password) => {
      try {
        const response = await axios.post("/api/auth/login", {
          email,
          password,
        });
  
        const { accessToken } = response.data;
  
        // Call /api/auth/me to get user details using the obtained accessToken
        const userResponse = await axios.get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const user = userResponse.data;
  
        localStorage.setItem(STORAGE_KEY, accessToken);
  
        dispatch({
          type: ActionType.SIGN_IN,
          payload: {
            user,
          },
        });
      } catch (error) {
        console.error(error);
        // Handle authentication error, e.g., show a message to the user
      }
    },
    [dispatch]
  );
  

  const signUp = useCallback(
    async (email, name, password) => {
      try {
        const { data } = await axios.post("/api/auth/register", {
          email,
          name,
          password,
        });
        const user = await axios.get("/api/auth/me", {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        });

        localStorage.setItem(STORAGE_KEY, data.accessToken);

        dispatch({
          type: ActionType.SIGN_UP,
          payload: {
            user: user.data,
          },
        });
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  const signOut = useCallback(async () => {
    localStorage.removeItem(STORAGE_KEY);
    dispatch({ type: ActionType.SIGN_OUT });
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        issuer: Issuer.JWT,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
