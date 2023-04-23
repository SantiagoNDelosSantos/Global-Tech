import { useState, createContext, useContext } from 'react';

const Notification = ({type, message}) => {

    const notificationStyle = {
        position:'absolute',
        zIndex: 11, 
        top: '8em',
        right: '1em',
        backgroundColor: 'black',
        border: type === 'success' ? '0.2em green solid' : '0.2em #cb0000 solid',
        color: 'white',
        padding: '0.6em',
        borderRadius: 20,
        fontFamily: 'Montserrat',
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
            setNotificationData({ type, text:''})
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
