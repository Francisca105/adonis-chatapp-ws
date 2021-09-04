'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage({username, body}) {
    let message = {
      username, body
    }
    this.socket.broadcastToAll('message', {message})
  }
}

module.exports = ChatController
