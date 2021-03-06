import { toast } from 'react-toastify';
import * as Str from './String';

const options ={
    position: "top-right",
    autoClose: 2222,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}

export const showSuccessNotification = (content) =>{
    toast.success(content, options);
}

export const showWarnNotification = (content) =>{
    toast.warn(content, options);
}

export const showInfoNotification = () =>{
    toast.info(Str.TEXT_MESSAGE_WELCOME_WEBSITE, options);
}


