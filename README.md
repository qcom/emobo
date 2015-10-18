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

### /combo emobo definition

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

### /emobos

return all emobos in the registry  

```bash
/emobos
```

## tests

```bash
$ npm install
$ npm test
```
## todo

* drop gulp

## license

MIT
