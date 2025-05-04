function addUserMessage(text) {
  const messages = document.getElementById('messages');
  const userMsg = document.createElement('div')
  userMsg.className = 'message user-message'
  userMsg.textContent = text
  messages.appendChild(userMsg)
  messages.scrollTop = messages.scrollHeight
}

function addBotMessage(text) {
  const messages = document.getElementById('messages');
  const botMsg = document.createElement('div');
  botMsg.className = 'message bot-message';
  botMsg.textContent = text;
  messages.appendChild(botMsg);
  messages.scrollTop = messages.scrollHeight;
}

function simulateConversation(messagesArray) {
  const messages = document.getElementById('messages');
  messages.removeChild(messages.lastChild); 
  let delay = 0;
  messagesArray.forEach((msg) => {
    delay += 1500;
    setTimeout(() => {
      addBotMessage(msg);
    }, delay);
  });
}

function quickReply(option) {
  addUserMessage(option);
  addBotMessage('FURIA está digitando...');
  setTimeout(() => {
    if (option === 'Próximo jogo') {
      simulateConversation([
        'Próximo jogo: FURIA x G2 - Hoje às 18h 🕕',
        'Atualizado às 17h45. Não perca! 🔥'
      ]);
    } else if (option === 'Últimos resultados') {
      simulateConversation([
        'Última partida: FURIA 2x0 MIBR 🎯',
        'Foi uma vitória arrasadora! 🏆'
      ]);
    } else if (option === 'Go FURIA') {
      simulateConversation([
        'GOOOOOOOOL DA FURIA! 🎯🔥',
        'A torcida está explodindo de emoção! 🔥🔥🔥',
        'Rumo à vitória, FURIOSO! 💪🐆'
      ]);
    } else if (option === 'Dúvidas') {
      simulateConversation([
        'Para dúvidas, entre em contato pelo e-mail fans@furia.gg 📩',
        'Estamos juntos nessa jornada! 👊'
      ]);
    } else {
      simulateConversation(['Obrigado pelo seu apoio! 🙌']);
    }
  }, 1500);
}

function handleUserInput() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (text === '') return;
  addUserMessage(text);
  addBotMessage('FURIA está digitando...');
  setTimeout(() => {
    if (text.toLowerCase().includes('capitão')) {
      simulateConversation(['O capitão do time de CS:GO é arT! 🎯']);
    } else if (text.toLowerCase().includes('jogo') || text.toLowerCase().includes('partida')) {
      simulateConversation(['Próximo jogo: FURIA x G2 - Hoje às 18h 🕕']);
    } else {
      simulateConversation(['🤔 Estamos processando sua pergunta...', 'Para mais informações, acesse o site oficial da FURIA! 🌐']);
    }
  }, 1500);
  input.value = '';
}
