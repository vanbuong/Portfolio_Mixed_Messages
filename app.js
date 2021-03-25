const mixedMessage = {
    _greetingMessage: [
        'Hello!',
        'Good Morning.',
        'Good Afternoon.',
        'Good Evening.',
        'It\'s nice to meet you.',
        'It\'s is a pleasure to meet you.',
        'Hi!',
        'Morning!'
    ],

    _jokingMessage: [
        'The next sentence is telling the truth. The previous sentence is telling a lie.',
        'If being ugly was a crime u would get a life sentence',
        'Some people think prison is one word…but to robbers it\'s a whole sentence',
        'A single sentence walks into a bar.',
        'You don\'t need a parachute to go skydiving, you need a parachute to go skydiving twice.',
        'You couldn\'t spit out a good sentence even if you ate a bowl of alphabet soup.',
        'how do you put “blonde” and “duh” in the same sentence? just say " blondes are (duh)mb',
        'How can you tell if google is a girl? It makes suggestions before you finish your sentence',
        'If i\'m the night guard at the Samsung store, does that make me a… guardian of the galaxy?'
    ],

    _connectedMessage: [
        'Sorry, Just kidding. Now the message will come to you.'
    ],

    _inspirationalMessage: [
        'Failing is the first step to the path of success. It means you are trying in every way to achieve it in your life.',
        'When you are choosing to be successful, you are also choosing to be failed. Because eventually, you will find new ways to reach your goal.',
        'The secrete to success is constancy. Stick to your purpose and work hard. Otherwise, success is just a dream.',
        'Don\'t waste your time looking back on what you’ve lost. Move on, for life is not meant to be traveled backward.',
        'Whenever you get pain in your life, Just think about the full form of pain? Positive Attitude In Negative Situations. Follow it. Life will change!',
        'Life is all about a card game. Choosing the right cards is not in our hands. But playing well with the cards in hand determines our Success!',
        'I challenge you to make your life a masterpiece. I challenge you to join the ranks of those people who live what they teach, who walk their talk.',
        'Small drops of water make an ocean. Just like that if you can accomplish small successes, it will turn into something bigger and better.'
    ],

    randomIndexFromArray(message) {
        return Math.floor(Math.random() * message.length);
    },

    generateMessage() {
        const greetingMessage = this._greetingMessage[this.randomIndexFromArray(this._greetingMessage)];
        const jokingMessage = this._jokingMessage[this.randomIndexFromArray(this._jokingMessage)];
        const connectedMessage = this._connectedMessage[this.randomIndexFromArray(this._connectedMessage)];
        const inspirationalMessage = this._inspirationalMessage[this.randomIndexFromArray(this._inspirationalMessage)];

        return `${greetingMessage}\n${jokingMessage}\n${connectedMessage}\n${inspirationalMessage}`;
    }
}

console.log(mixedMessage.generateMessage());