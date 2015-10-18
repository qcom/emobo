# emobo

webhook server supporting a small suite of custom Slack slash commands for storing and referencing emoji combos (emobos)

## install

```bash
$ npm install emobo
```

## run

```bash
$ npm start
```

## use

### /combo [emobo] [definition]

register a new emobo combination

```bash
/combo amigo :wave::skin-tone-4: :man::skin-tone-4: :flag-mx:
/combo dreamteam :ryan-dreamteam: :pam-dreamteam: :vikram-dreamteam:
```

### /x $emobo

expand a message with one or more embedded `$emobo` references

```bash
/x $amigo
/x welcome to the $dreamteam
```

### /emobos [help]

return all emobos in the registry

```bash
/emobos
```

### /delete emobo

purge `emobo` from the registry

```bash
/delete amigo
```

## tests

```bash
$ npm install
$ npm test
```
## todo

* oauth
* drop gulp
* improve error handling middleware to check for known operational cases
* validate new calls to /combo by augmenting the Store to include a validation layer
* register the necessary slack server's integrations via a script in bin/
	* eliminate the current redundancy in multiple documentation endpoints with duplicated string literals
	  by exposing the repeated phrases as app-level globals

## license

MIT
