import axios from 'axios';
import toast from 'react-hot-toast';

export const loginCall = async (userCredentials, dispatch, history) =>{
    dispatch({ type: "LOGIN_START" });
    console.log(userCredentials);

      try{
        let res = await axios.post('http://localhost:7000/api/v1/auth/login', userCredentials);
        console.log(res);
        if(res.data.success) toast.success(res.data.msg);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.data});
        history.push('/');

        
        // console.log(res.data);
      }catch(err){
        if(!err.response.data.success) return toast.error(err.response.data.msg);
        dispatch({type:'LOGIN_FAILURE', payload: err})
      }
} 