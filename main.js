var messages = document.getElementById('messages');
var sendButton = document.getElementById('send-btn');
// По нажатию на кнопку отправить - отправить на сервер nickname:message
sendButton.addEventListener('click', sendUserMessage);
getMessagesFromServer()
// Шаг1:
// Получить сообщение с сервера
async function getMessagesFromServer() {
// Получаем ассинхронный ответ
  var response = await fetch('file:///D:/OSPanel/domains/localhost/index.html')
// Декодируем его из строки в объекты javascript
  response = await response.json();
// Создать верстку меседжа
var allMessagesHTML ='';
for (var i = 0; i < response.length; i++){
  var messageData = response[i];
  var message =
  <div class="message">
    <div class="message-nickname"> ${messageData.Name} </div>
    <div class="message-text"> ${messageData.Message} </div>
  </div>
  ;
  allMessagesHTML = allMessagesHTML + message;
}

// Добавить в messages-wrapper письма.
messages.innerHtml = message;
}
async function sendUserMessage(){
// Получить что написал пользователь в поле nickname
 var userNickname = document.getElementById('nickname-input').value;
 // Получить что написал пользователь в поле message
 var userMessage = document.getElementById('message-input').value;
 if (userNickname.length === 0) {
  alert("Ты должен ввести имя!");
  return;
 }
 if (userMessage.length === 0) {
  alert("Ты должен ввести сообщение!");
  return;
 }
await fetch('file:///D:/OSPanel/domains/localhost/index.html',{
 method:'POST',
 body: JSON.stringify({
 Name:  userNickname,
 Message: userMessage
 })
});
 getMessagesFromServer();

})
