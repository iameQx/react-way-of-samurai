import { useRef } from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

  let newMessageElement = useRef(null);

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  const onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text)
    props.dispatch(action);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.messagesPage.dialogsData.map(item => {
          return <DialogItem key={item.id} id={item.id} name={item.name} />
        })}
      </div>
      <div className={s.messages}>
        {props.messagesPage.messagesData.map(item => {
          return <Message key={item.id} id={item.id} text={item.text} />
        })}
        <div>
          <div>
            <textarea ref={newMessageElement}
              onChange={onMessageChange}
              value={props.messagesPage.newMessageText} />
          </div>
          <div>
            <button onClick={addMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;