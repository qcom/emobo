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

### /combo

register an emobo

```bash
$ /combo amigo :ryan-dreamteam: :pam-dreamteam: :vikram-dreamteam:
```

### /x

expand a message with one or more embedded emobo references

```bash
/x hey! $amigo
```

### /emobos

return all emobos in the registry  

```bash
$ /emobos
```

## tests

```bash
$ npm install
$ npm test
```

## license

MIT
