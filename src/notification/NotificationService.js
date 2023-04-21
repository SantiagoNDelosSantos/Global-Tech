import { useState, createContext, useContext } from 'react';

const Notification = ({type, message}) => {

    const notificationStyle = {
        position:'absolute',
        top:80,
        right: 50,
        backgroundColor: 'black',
        border: type === 'success' ? '0.2em green solid' : '0.2em red solid',
        color: 'white',
        padding: '1em',
        borderRadius: 20,
        textTransform: 'upperCase'
    }

    if(!message) return

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )

}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const[notificationData, setNotificationData] = useState({
        type: 'error',
        text: ''
    })

    const setNotification = (type, text) => {
        setNotificationData({type,text})
        setTimeout(() => {
            setNotification({ type, text:''})
        }, 4000)
    }    

    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification type={notificationData.type} message={notificationData.text}/>
            {children}
        </NotificationContext.Provider>
    )

}

export const useNotification = () => {
    return(
        useContext(NotificationContext)
    )
}