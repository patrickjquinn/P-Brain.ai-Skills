# P-Brain.ai - Voice Controlled Personal Assistant

[![Join the chat at https://gitter.im/P-Brain/Lobby](https://badges.gitter.im/P-Brain/Lobby.svg)](https://gitter.im/P-Brain/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Repo of Skills for the P-Brain.ai virtual assistant

## Dependencies

- Node 6

## Video Introduction To Building A Skill

https://www.youtube.com/watch?v=Hy8WHKmWTLk

## Building & Installing Skills

- Add a skill by creating a new folder with the name of your new skill and adding an `index.js`.

- Add functions for `_intent` and `{skill_name}_resp` to that index, the latter contining the logic that will respond to a query. The `{skill_name}_resp` function must have a response type of `String`

- In `_intent` add `return {keywords:['key 1','key 2'], module:'{skill_name}'}` where `keywords` are the phrases you wish the skill to respond to and `{skill_name}` is the name of your new skill.

- Add `module.exports = {intent:_intent, get: {skill_name}_resp};` to the end of your `index.js`

- Add that new folder to the `skills` directory in the project.

- And bang, Brain will automatically import and enable your new skill!
