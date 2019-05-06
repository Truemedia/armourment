# Armourment
Generate conversational UI by having actual conversations

## Installation
Armoument provides a command line interface for playing out conversation scenarios, and using the conversation you provide create a timeline which can produce files useful for NLU such as utter files, SSML, and Kson Schema.
```bash
  npm i -g armourment
```

## Usage
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
