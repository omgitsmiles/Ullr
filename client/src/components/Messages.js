import React from 'react'

const Messages = () => {
  return (
    <div className="chatWindow">
        <ul className="chat" id="chatList">
          {/* {this.state.groupMessage.map(data => ( */}
            <div>
              {/* {this.state.user.uid === data.sender.uid ? ( */}
                <li className="self">
                  <div className="msg">
                    <p>user1</p>
                    <div className="message">test</div>
                  </div>
                </li>
              {/* ) : ( */}
                <li className="other">
                  <div className="msg">
                    <p>user 2</p>
                    <div className="message"> test1 </div>
                  </div>
                </li>
              {/* )} */}
            </div>
          {/* ))} */}
        </ul>
        <div className="chatInputWrapper">
          <form >
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
              // onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
  )
}

export default Messages