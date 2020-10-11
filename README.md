<div align=center><img src="./logo.png"/></div>

# fe-standard-config-seed

This is a seed project which contains common configs for code format and lint,including:

- lerna(please switch to lerna branch)
- typescript
- eslint
- stylelint
- commitlint
- prettier
- husky
- changelog
- editorconfig
- standversion
- license

## How To Use

- step1: install vigor-cli

```shell
npm i -g vigor-cli && vigor create
```

- step2:select fe-standard-config-seed template

- step3:add your code

```shell
git add .
```

- step4:commit

please use `git cz` insteadof `git commit`

```shell
git cz
```

this will check eslint、stylelint and commitlint

- step5:generate changelog(if you need)

```shell
npm run release
```
