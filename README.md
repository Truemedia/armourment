# Armourment
Generate conversational UI by having actual conversations

## Installation
Armoument provides a command line interface for playing out conversation scenarios, and using the conversation you provide create a timeline which can produce files useful for NLU.
```bash
  npm i -g armourment
```

## Usage

### CLI
Narrate a conversation using script play style of writing, where the name of the actor (bot, person) appended with a colon (:) proceeds there speech. Simple press 'ENTER' to speak again or type 'CUT' to end the conversation.
```bash
  armourment
```

```bash
  CHAT> Person: Hello
```

(Press enter)

```bash
  CHAT> Bot: Hello World
```

### File types
This commandline tool works with multiple file types, some standardised and widely supported, other we kind of made up because nothing else exists at the moment ¯\_(ツ)_/¯. This includes:

- JSON Schema (*.schema.json)
- Speech sythesis markup language (*.ssml)
- Timeline file (*.timeline.json)
  File containing array of (Message objects)[https://github.com/mattmezza/react-beautiful-chat#message-objects]
- Utter file (*.utter)
