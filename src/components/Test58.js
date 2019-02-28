import React from 'react'

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeffly Zakkarman',
            online: true
          },
          {
            username: 'Alan Kaiware',
            online: false
          },
          {
            username: 'Mary Gold',
            online: false
          },
          {
            username: 'Jim Watson',
            online: true
          },
          {
            username: 'Sara Takanashi',
            online: true
          },
          {
            username: 'Laura Spinner',
            online: true
          },
          {
            username: 'Domingo Wireless',
            online: true
          }
        ]
      }
    }
    render() {
      var id = 0;
      const uArray = this.state.users;
      const usersOnline = uArray.filter(user => {
        return user.online === true})
      const renderOnline = usersOnline.map(user => {
        return <li key={id++}>{user.username}</li>
      })
      // console.log(new Date().getTime())
      return (
         <div>
           <h1>Current Online Users:</h1>
           <ul>
             {renderOnline}
           </ul>
         </div>
      );
    }
  };
  export default MyComponent